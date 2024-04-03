const mysql = require('mysql');
const bodyParser = require('body-parser');
const con = require('../../database_connection');

let city_state_dropdown = (req, res) => {
    res.render('./city_state_dropdown/city_state_dropdown');
};

let state = (req, res) => {

    let select_state = `SELECT distinct(state) FROM state_cities order by state`;
    con.query(select_state, (err, result) => {
        if (err) throw err;

        res.send(result)
    });
};

let city = (req, res) => {

    let select_city = `SELECT city FROM state_cities WHERE state = ? order by city`;
    con.query(select_city, [req.query.state], (err, result2) => {
        if (err) throw err;

        res.send(result2);
    });
}

module.exports = { city_state_dropdown, state, city };