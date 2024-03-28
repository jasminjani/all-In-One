const express = require('express');
const mysql = require('mysql');
const isAuthorization = require('../middleware/isAuthorization');
var task_12 = express.Router();
let total_record = 200;
let pagesize = 25;



task_12.get('/task_12/attendance', isAuthorization, (req, res) => {

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "all_task_in_one"
    });

    let month = req.query.month;
    if (month == 'december23') {
        var start_date = "2023-12-01";
        var end_date = "2023-12-31";
        var month_day = 31;
    }
    else if (month == 'january24') {
        start_date = "2024-01-01";
        end_date = "2024-01-31";
        month_day = 31;
    }
    else if (month == 'february24') {
        start_date = "2024-02-01";
        end_date = "2024-02-29";
        month_day = 29;
    } 
    else {
        start_date = "2023-12-01";
        end_date = "2023-12-31";
        month_day = 31;
    }

    con.connect(function (err) {
        if (err) throw err;




        if (req.query["page"] == undefined) {

            let orderby ='s_id asc' ;
            // let order = 'desc'; 
            
            // orderby +=order

            let select =`SELECT student_master.s_id, student_master.first_name, student_master.last_name, count(attendance_master.attendance) AS present, count(attendance_master.attendance) AS percentage
            FROM student_master 
            INNER JOIN attendance_master ON student_master.s_id = attendance_master.s_id  
            WHERE attendance_master.attendance = 'P' AND attendance_master.attendance_date 
            BETWEEN ? AND ? GROUP BY s_id ORDER BY ${orderby} LIMIT ?`;

            con.query(select, [start_date, end_date, pagesize], (err, result) => {
                if (err) throw err;
                let query = req.query;
                res.render('./task-12/task-12', { page: 1, month:'december23', query : query, month_day: month_day, total_record: total_record, pagesize: pagesize, orderby : orderby,  data: result })
            })

        }

        else {
            let last_record = pagesize * (req.query["page"] - 1);

            let orderby = req.query.orderby;
            // console.log(orderby);



            let select = `
            SELECT student_master.s_id, student_master.first_name, student_master.last_name, count(attendance_master.attendance) AS present, count(attendance_master.attendance) AS percentage 
            FROM student_master 
            INNER JOIN attendance_master ON student_master.s_id = attendance_master.s_id  
            WHERE attendance_master.attendance = 'P' AND attendance_master.attendance_date 
            BETWEEN ? AND ? GROUP BY s_id ORDER BY  ${orderby} LIMIT ?,?`;

            con.query(select, [start_date, end_date, last_record, pagesize], (err, result) => {
                if (err) throw err;
                let query = req.query;
                res.render('./task-12/task-12', { page: req.query["page"], month_day: month_day, query : query, month: req.query.month, total_record: total_record, pagesize: pagesize, orderby : orderby, data: result })
            });

        }

    });

});

task_12.get('/task_12/exam', isAuthorization, (req, res) => {

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "all_task_in_one"
    });

    con.connect(function (err) {
        if (err) throw err;

        if (req.query["page"] == undefined) {


            let select =
                `SELECT student_master.s_id , student_master.first_name, student_master.last_name, 
             SUM(CASE WHEN result_master.exam_id = 1 THEN result_master.practical_mark END) AS practical_terminal,
             SUM(CASE WHEN result_master.exam_id = 1 THEN result_master.theoretical_mark END) AS theory_terminal,  
             SUM(CASE WHEN result_master.exam_id = 2 THEN result_master.practical_mark END) AS practical_prelim,
             SUM(CASE WHEN result_master.exam_id = 2 THEN result_master.theoretical_mark END) AS theory_prelim, 
             SUM(CASE WHEN result_master.exam_id = 3 THEN result_master.practical_mark END) AS practical_final,
             SUM(CASE WHEN result_master.exam_id = 3 THEN result_master.theoretical_mark END) AS theory_final,
             sum(CASE WHEN exam_id =1 OR exam_id =2 OR exam_id =3 THEN practical_mark + theoretical_mark END) AS obtain_mark
             FROM student_master
             INNER JOIN result_master ON student_master.s_id = result_master.s_id
             GROUP BY student_master.s_id LIMIT ?`;

            con.query(select, [pagesize], (err, result) => {
                if (err) throw err;

                res.render('./task-12/exam', { page: 1, total_record: total_record, pagesize: pagesize, data: result })
            })

        }

        else {
            let last_record = pagesize * (req.query["page"] - 1);

            let select = `
            SELECT student_master.s_id , student_master.first_name, student_master.last_name, 
            SUM(CASE WHEN result_master.exam_id = 1 THEN result_master.practical_mark END) AS practical_terminal,
            SUM(CASE WHEN result_master.exam_id = 1 THEN result_master.theoretical_mark END) AS theory_terminal,  
            SUM(CASE WHEN result_master.exam_id = 2 THEN result_master.practical_mark END) AS practical_prelim,
            SUM(CASE WHEN result_master.exam_id = 2 THEN result_master.theoretical_mark END) AS theory_prelim, 
            SUM(CASE WHEN result_master.exam_id = 3 THEN result_master.practical_mark END) AS practical_final,
            SUM(CASE WHEN result_master.exam_id = 3 THEN result_master.theoretical_mark END) AS theory_final,
            sum(CASE WHEN exam_id =1 OR exam_id =2 OR exam_id =3 THEN practical_mark + theoretical_mark END) AS obtain_mark
            FROM student_master 
            INNER JOIN result_master ON student_master.s_id = result_master.s_id
            GROUP BY student_master.s_id LIMIT ?,?`;

            con.query(select, [last_record, pagesize], (err, result) => {
                if (err) throw err;

                res.render('./task-12/exam', { page: req.query["page"], total_record: total_record, pagesize: pagesize, data: result })
            });

        }

    });

});



task_12.get('/task_12/fullresult/:id', isAuthorization, (req, res) => {

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "all_task_in_one"
    });

    con.connect(function (err) {
        if (err) throw err;

        let s_id = req.params.id;
        // console.log(s_id)

        let present = `
        SELECT student_master.s_id, student_master.first_name, student_master.last_name, count(attendance_master.attendance) AS present 
        FROM student_master 
        INNER JOIN attendance_master ON student_master.s_id = attendance_master.s_id  
        WHERE student_master.s_id = ? AND attendance_master.attendance = 'P' AND attendance_master.attendance_date 
        BETWEEN '2023-01-01' AND '2024-02-29' GROUP BY s_id ORDER BY s_id`;

        con.query(present, [s_id], (err, result1) => {
            if (err) throw err;





            let select = `SELECT student_master.s_id , subject_master.sub_name,
            SUM(CASE WHEN result_master.exam_id = 1 THEN result_master.practical_mark END) AS practical_terminal,
            SUM(CASE WHEN result_master.exam_id = 1 THEN result_master.theoretical_mark END) AS theory_terminal,  
            SUM(CASE WHEN result_master.exam_id = 2 THEN result_master.practical_mark END) AS practical_prelim,
            SUM(CASE WHEN result_master.exam_id = 2 THEN result_master.theoretical_mark END) AS theory_prelim, 
            SUM(CASE WHEN result_master.exam_id = 3 THEN result_master.practical_mark END) AS practical_final,
            SUM(CASE WHEN result_master.exam_id = 3 THEN result_master.theoretical_mark END) AS theory_final,
            sum(CASE WHEN exam_id =1 OR exam_id =2 OR exam_id =3 THEN practical_mark + theoretical_mark END) AS obtain_mark
            FROM student_master 
            INNER JOIN result_master ON student_master.s_id = result_master.s_id 
            INNER JOIN subject_master ON subject_master.sub_id = result_master.sub_id
            WHERE student_master.s_id = ? GROUP BY subject_master.sub_id`;


            con.query(select, [s_id], (err, result2) => {
                if (err) throw err;

                let total = `SELECT (SUM(practical_mark) + SUM(theoretical_mark)) AS total_mark FROM result_master WHERE s_id = ?`;

                con.query(total, [s_id], (err, result3) => {
                    if (err) throw err;


                    res.render('./task-12/full_result', { data1: result1, data2: result2, data3 : result3 });
                })
            });
        });
    });

});


module.exports = task_12;