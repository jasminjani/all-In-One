const express = require('express');
const mysql = require('mysql')
var task_11 = express.Router();
let total_record = 50000;
let pagesize = 350;
// let last = total_record / pagesize;


task_11.get('/task_11/detail', (req, res) => {

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "student_detail_2602"
    });

    con.connect(function (err) {
        if (err) throw err;

        if (req.query["page"] == undefined) {
            let select = "SELECT * FROM student_master LIMIT ?";
            // let table = "student_master";
            con.query(select, [pagesize], (err, result) => {
                if (err) throw err;

                res.render('./task-11/task-11', { page: 1, total_record : total_record, pagesize : pagesize, data: result });
            });
        }

        else {

            let last_record = pagesize * (req.query["page"] - 1);
            // let last_record = pagesize * (req.query.page - 1);

            // console.log(last_record)

            let select = "SELECT * FROM student_master LIMIT ?,?";
            con.query(select, [last_record, pagesize], (err, result) => {
                if (err) throw err;

                res.render('./task-11/task-11', { page: req.query["page"], total_record : total_record, pagesize : pagesize, data: result });
            });
        }
    });
});

task_11.get('/task_11/orderby', (req, res) => {

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "student_detail_2602"
    });

    con.connect(function (err) {
        if (err) throw err;

        if (req.query["page"] == undefined) {
            let select = "SELECT * FROM student_master ORDER BY first_name,city LIMIT ?  ";
            // let table = "student_master";
            con.query(select, [pagesize], (err, result) => {
                if (err) throw err;

                res.render('./task-11/order_by', { page: 1, total_record : total_record, pagesize : pagesize,  data: result });
            });
        }

        else {
            let last_record = pagesize * (req.query["page"] - 1);
            // console.log(last_record)

            let select = "SELECT * FROM student_master ORDER BY first_name, city LIMIT ?,?";
            con.query(select, [last_record, pagesize], (err, result) => {
                if (err) throw err;

                res.render('./task-11/order_by', { page: req.query["page"], total_record : total_record, pagesize : pagesize, data: result });
            });
        }
    });
});


module.exports = task_11;