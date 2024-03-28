const express = require('express');
const mysql = require('mysql');
const isAuthorization = require('../middleware/isAuthorization');

var task_7 = express.Router();


task_7.get('/task_7', isAuthorization, (req, res) => {

    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "all_task_in_one"
    });

    con.connect((err) => {
        if (err) throw err;

        let input = req.query.input;
        console.log(input);

        if (input == undefined) {
            input = ""
        }


        let str = input.replaceAll("_", "&_").replaceAll("^", "&^").replaceAll("$", "&$").replaceAll("}", "&}").replaceAll("{", "&{").replaceAll(":", "&:").split('&');

        str.shift(); // because first element of array is null
        console.log(str);

        let first_name = [];
        let last_name = [];
        let email = [];
        let dob = [];
        let phone_no= [];
        let city = [];

        str.forEach(element => {
            let del = element.charAt(0);

            switch (del) {
                case "_":
                    first_name.push(element.slice(1, element.length))
                    break;

                case "^":
                    last_name.push(element.slice(1, element.length))
                    break;

                case "$":
                    email.push(element.slice(1, element.length))
                    break;

                case "}":
                    dob.push(element.slice(1, element.length))
                    break;

                case "{":
                    phone_no.push(element.slice(1, element.length))
                    break;

                case ":":
                    city.push(element.slice(1, element.length))
                    break;

                default:
                    break;
            }
        });

        console.log(first_name);
        console.log(last_name);
        console.log(email);
        console.log(dob);
        console.log(phone_no);
        console.log(city);
        console.log(input);


        let select = `SELECT * FROM student_master_2 WHERE ( ` 
                    if(first_name.length > 0) {
                        for(let i = 0; i < first_name.length; i++) {
                            select = select + `first_name LIKE '${first_name[i]}%' OR `
                        }
                        select =  select.slice(0,select.length - 3) + `) AND ( `;
                    } 
                    if(last_name.length > 0) {
                        for(let i = 0; i < last_name.length; i++) {
                            select = select + `last_name LIKE '${last_name[i]}%' OR `
                        }
                        select =  select.slice(0,select.length - 3) + `) AND ( `;
                    } 
                    if(email.length > 0) {
                        for(let i = 0; i < email.length; i++) {
                            select = select + `email LIKE '${email[i]}%' OR `
                        }
                        select =  select.slice(0,select.length - 3) + `) AND ( `;
                    } 
                    if(dob.length > 0) {
                        for(let i = 0; i < dob.length; i++) {
                            select = select + `dob LIKE '${dob[i]}%' OR `
                        }
                        select =  select.slice(0,select.length - 3) + `) AND ( `;
                    } 
                    if(phone_no.length > 0) {
                        for(let i = 0; i < phone_no.length; i++) {
                            select = select + `phone_no LIKE '${phone_no[i]}%' OR `
                        }
                        select =  select.slice(0,select.length - 3) + `) AND ( `;
                    } 
                    if(city.length > 0) {
                        for(let i = 0; i < city.length; i++) {
                            select = select + `city LIKE '${city[i]}%' OR `
                        }
                        select =  select.slice(0,select.length - 3) + `) AND ( `;
                    } 
                    select = select.slice(0, select.length - 6);



        con.query(select, [first_name,last_name,email,dob,phone_no,city], (err,result) => {
            if (err) throw err;
            console.log(select);
            res.render('./task-7/task-7', { data : result, input : input } );

        });

    });

});


module.exports = task_7;