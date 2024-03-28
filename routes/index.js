const express = require('express');
var randomize = require('randomatic');
const mysql = require('mysql');
const md5 = require('md5');
var jwt = require('jsonwebtoken');
var router = express.Router();
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const isAuthorization = require('../middleware/isAuthorization');



// ===== REGISTRATION PAGE ======


router.get('/', (req, res) => {
    res.render('./task-0/registration')
});

router.post('/post', (req, res) => {

    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "all_task_in_one"
    });

    con.connect((err) => {
        if (err) throw err;

        let body = req.body;

        let select_email = `SELECT count(email) AS mail, status, activation_code AS activation FROM user_registrations where email = ? `;

        con.query(select_email, [body.email], (err, result2) => {
            if (err) throw err;

            // console.log(result2[0].mail);

            if ((result2[0].mail > 0) && (result2[0].status == 1)) {
                res.send({ a: " email already exist" })
            }
            else if ((result2[0].mail > 0) && (result2[0].status == 0)) {

                let update_created_time = `UPDATE user_registrations SET created_at = current_timestamp(6)  WHERE activation_code = ?`;

                con.query(update_created_time, [result2[0].activation], (err, result3) => {
                    if (err) throw err;

                    res.send({ b: " user exist but link not activated", activation: result2[0].activation })
                })

            }
            else {

                let activation = randomize('Aa0', 12);
                console.log("activation code : ", activation);

                let insert_user_registration = `insert into user_registrations (first_name, last_name, email, phone_no, activation_code, status) values (?, ?, ?, ?, ?, ?)`;

                con.query(insert_user_registration, [body.first_name, body.last_name, body.email, body.phone_no, activation, "0"], (err, result) => {
                    if (err) throw err;

                })
                res.send({ activation: activation });

            }

        })

    })

});


// ===== PASSWORD VERIFICATION ======


router.get('/password/:activation', (req, res) => {

    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "all_task_in_one"
    });

    con.connect((err) => {
        if (err) throw err;


        let select_create_time = `SELECT created_at, activation_code FROM user_registrations WHERE activation_code = "${req.params.activation}"`;

        con.query(select_create_time, (err, result) => {
            if (err) throw err;

            let curr_time = new Date();
            let created_time = new Date(result[0].created_at);

            let time_diff_in_sec = (curr_time - created_time) / 1000;


            if (time_diff_in_sec < 60) { // after 60 seconds link will be expired. 
                res.render('./task-0/password');
            }
            else {

                res.write("session time out");
                res.end()
            }
        })
    });

});


// ====== FORGOT PASSWORD PAGE ========


router.get('/forgot_password/:activation', (req, res) => {
    res.render('./task-0/password');
});


// ====== PASSWORD VERIFICATION AND FORGOT PASSWORD PAGE POST REQUEST ========


router.post('/password/:activation', (req, res) => {

    // console.log("act : ",  req.params.activation);

    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "all_task_in_one"
    });

    con.connect((err) => {
        if (err) throw err;

        let password = req.body.password;
        let salt = randomize('Aa0!', 4);
        // console.log("salt : ",salt);
        // console.log("saltpw : ",password);
        let pass_salt = password + salt
        // console.log("pass_salt : ",pass_salt);
        let md5_pass = md5(pass_salt);
        // console.log("md5 password : ",md5_pass);

        let update_user_registration = `UPDATE user_registrations SET password = ?, salt = ?, status = ? WHERE activation_code = "${req.params.activation}"`;

        con.query(update_user_registration, [md5_pass, salt, "1"], (err, result) => {
            if (err) throw err;
            res.send({ data: result })
        })
    })

});



// ====== LOGIN PAGE ==========





router.get('/login', (req, res) => {
    res.render('./task-0/login');
});



router.post('/loginpage', (req, res) => {

    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "all_task_in_one"
    });

    con.connect((err) => {
        if (err) throw err;

        select_user_registration = `SELECT u_id, email, password, salt, activation_code FROM user_registrations WHERE email = ? `;

        con.query(select_user_registration, [req.body.email], (err, result) => {
            if (err) throw err;

            // console.log(result);

            if (result[0] == undefined) {
                res.send({ a: "email nahi mila" });
            }
            else {

                let password = req.body.password;

                let salt = result[0].salt;
                // console.log("salt : ",salt);
                // console.log("password : ",password);
                let pass_salt = password + salt;
                // console.log("pass_salt : ",pass_salt);
                let md5_pass = md5(pass_salt);
                // console.log("md5 password : ",md5_pass);


                if (md5_pass == result[0].password) {

                    var token = jwt.sign({ email: result[0].email }, 'jash');
                    res.cookie("token", token, {maxAge: 60*1000});
                    console.log(token.length);

                    res.send({ data: result});
                } else {
                    res.send({ b: "Enter valid details" });
                }
            }
        });
    });
});



// ====== LOGIN PAGE FORGOT PASSWORD ========


router.post('/forgot', (req, res) => {

    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "all_task_in_one"
    });

    con.connect((err) => {
        if (err) throw err;

        select_user_registration = `SELECT u_id, email, password, salt, activation_code FROM user_registrations WHERE email = ? `;

        con.query(select_user_registration, [req.body.email], (err, result) => {
            if (err) throw err;

            console.log(result);

            if (result[0] == undefined) {
                res.send({ a: "email does not exist" });
            }
            else {
                res.send({ data: result });
            }

        });
    });

});




// ======== DASHBOARD ===========


router.get('/dashboard/', isAuthorization,(req, res) => {
    console.log(req.body.email);
    res.render("./task-0/dashboard")
});



module.exports = router;