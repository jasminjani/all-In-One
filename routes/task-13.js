const express = require('express');
const mysql = require('mysql');
var task_13 = express.Router();
let pagesize = 25;

task_13.get('/task_13', (req, res) => {
    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "student_result_2702"
    });

    con.connect(function (err) {
        if (err) throw err;

        var input_query = req.query.input;
        var select = input_query + ` LIMIT ?`;

        if (input_query == null) {
            select = `select * from student_master where s_id < 26`;
        }

        con.query(`select count(*) as total_record from (${input_query}) as total_record`, (err, total_record) => {

            if (total_record != undefined) {
                total_record = JSON.parse(JSON.stringify(total_record));
                var last = Math.ceil(total_record[0].total_record / pagesize);
                // console.log( "total record : ",total_record[0].total_record);

            }
            if (total_record == undefined) {
                last = 1;
            }



            if (req.query["page"] == undefined) {


                con.query(select, [pagesize], (err, result) => {
                    if (err) throw err;

                    res.render('./task-13/task-13', { data: result, page: 1, last: last, input_query: input_query, select: select });
                });
            }
            else {

                // console.log("else part");

                let last_record = pagesize * (req.query["page"] - 1);

                select = input_query + ` LIMIT ?,?`;

                con.query(select, [last_record, pagesize], (err, result) => {
                    if (err) throw err;

                    res.render('./task-13/task-13', { data: result, page: req.query["page"], last: last, input_query: input_query, select: select });
                });
            }

        })
    });
});


module.exports = task_13;