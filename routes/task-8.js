const express = require('express');
const mysql = require('mysql');
const isAuthorization = require('../middleware/isAuthorization');

var task_8 = express.Router();


task_8.get('/task_8', isAuthorization, (req, res) => {

    const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "all_task_in_one"
    });

    con.connect((err) => {
        if (err) throw err;

        let input = req.query.input;
        // console.log(input);

        let select = `SELECT * FROM select_master JOIN option_master ON select_master.s_id = option_master.s_id WHERE select_master.select_name = ?`;

        con.query(select, [input], (err,result) => {
            if (err) throw err;
            // console.log(result);
            res.render('./task-8/task-8', { data : result, input : input } );

        });
    });
});

module.exports = task_8;