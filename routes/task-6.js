const express = require('express');
const mysql = require('mysql');
var task_6 = express.Router();



task_6.get('/task_6',(req,res) => {

    const con = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "root",
        database : "student_result_2702"
    })

    con.connect((err) => {
        if(err) throw err;

        let s_id = req.query.input;
        // console.log(s_id)
        if (s_id == undefined) {
            s_id = 0;
        }

        console.log(s_id);
        let select  = `SELECT * FROM student_master WHERE s_id IN (?) `;

        con.query(select, [s_id], (err,result) => {
            if(err) throw err;
            // console.log(s_id)
            res.render('./task-6/task-6', { data : result, s_id : s_id } );

        });
    });
});


task_6.get('/task_6/show_more', (req,res) => {

    const con = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "root",
        database : "student_result_2702"
    });

    con.connect((err) => {
        if (err) throw err;

        let first_name = req.query.first_name;
        let last_name = req.query.last_name;
        let gender = req.query.gender;
        let email = req.query.email;
        let phone_no = req.query.phone_no; 
        let option = req.query.option;


        // console.log(first_name);
        // console.log(last_name);
        // console.log(gender);
        // console.log(email);
        // console.log(phone_no);

        // if (first_name == undefined && last_name == undefined && gender == undefined && email == undefined && phone_no == undefined && option == undefined ) {
        //     first_name = 0, last_name = 0, gender = 0, email = 0, phone_no = 0, option = 0;
        // }


        let select;     
        if (option == undefined) {
             select = `SELECT * FROM student_master WHERE first_name = ? OR last_name = ? OR gender = ? OR email = ? OR phone_no = ?`
        }else {
             select = `SELECT * FROM student_master WHERE first_name LIKE '${first_name}%' ${option} last_name LIKE '${last_name}%' ${option} gender LIKE '${gender}%' ${option} email LIKE '${email}%' ${option} phone_no LIKE '${phone_no}%'`           
        }

        con.query(select, [first_name, last_name, gender, email, phone_no], (err,result) => {
            if (err) {
                res.end("enter valid query");
            };
            console.log(select);
            res.render('./task-6/show_more_ways', { data : result , first_name : first_name, last_name : last_name, gender : gender, email : email, phone_no : phone_no, option : option });
    
        });
    })  
});

module.exports = task_6;

