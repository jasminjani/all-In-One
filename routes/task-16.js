const express = require('express');
const mysql = require('mysql');
var task_16 = express.Router();
const bodyParser = require('body-parser');


task_16.get('/task_16', (req,res) => {
    res.render('./task-16/task-16');
});

task_16.get('/task_16/country', (req,res) => {

    const con = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "root",
        database : "clock_timezone_200324"
    });

    con.connect((err) => {
        if (err) throw err;

        let select_timezones = `SELECT distinct(country) FROM timezones order by country`;
        con.query(select_timezones, (err,result) => {
            if (err) throw err;

            res.send(result)
        });
    })

});

task_16.get('/task_16/city', (req,res) => {

    // console.log(req.query.country);
    const con = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "root",
        database : "clock_timezone_200324"
    });

    con.connect((err) => {
        if (err) throw err;

        let country = "india";
        let select_timezones = `SELECT timezone FROM timezones WHERE country = ?`;
        con.query(select_timezones, [req.query.country], (err,result2) => {
            if (err) throw err;

            res.send(result2);
        });
    })

});

task_16.post('/task_16', (req,res) => {

});

module.exports = task_16;