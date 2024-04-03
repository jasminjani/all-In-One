const express = require('express');
const randomize = require('randomatic');
const mysql = require('mysql');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const con = require('../../database_connection');



// ===== REGISTRATION PAGE ======

let registration = (req, res) => {
    res.render('./index/registration')
};

let check_registrartion = (req, res) => {

    let body = req.body;

    let select_email = `SELECT count(email) AS mail, status, activation_code AS activation FROM user_registrations where email = ? `;

    con.query(select_email, [body.email], (err, result2) => {
        if (err) throw err;

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

            let insert_user_registration = `insert into user_registrations (first_name, last_name, email, phone_no, activation_code, status) values (?, ?, ?, ?, ?, ?)`;

            con.query(insert_user_registration, [body.first_name, body.last_name, body.email, body.phone_no, activation, "0"], (err, result) => {
                if (err) throw err;

            })
            res.send({ activation: activation });
        }
    })
};

module.exports = { registration, check_registrartion };