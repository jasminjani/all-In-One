const express = require('express');
const mysql = require('mysql');
var task_14 = express.Router();
const bodyParser = require('body-parser');

task_14.get('/task_14', (req,res) => {
    res.render('./task-14/task-14');
});

task_14.get('/task_14/state', (req,res) => {

    const con = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "root",
        database : "state_city_150324"
    });

    con.connect((err) => {
        if (err) throw err;

        let select_state = `SELECT distinct(state) FROM state_cities order by state`;
        con.query(select_state, (err,result) => {
            if (err) throw err;

            res.send(result)
        });
    })

});

task_14.get('/task_14/city', (req,res) => {

    // console.log(req.query.state);
    const con = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "root",
        database : "state_city_150324"
    });

    con.connect((err) => {
        if (err) throw err;

        let select_city = `SELECT city FROM state_cities WHERE state = ? order by city`;
        con.query(select_city, [req.query.state], (err,result2) => {
            if (err) throw err;

            res.send(result2);
        });
    })

});

task_14.post('/task_14', (req,res) => {

});

module.exports = task_14;