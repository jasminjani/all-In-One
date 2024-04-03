const mysql = require('mysql');
const bodyParser = require('body-parser');
const con = require('../../database_connection');

let timezone_converter = (req, res) => {
  res.render('./timezone_converter/timezone_converter');
};

let country = (req, res) => {

    let select_timezones = `SELECT distinct(country) FROM timezones order by country`;
    con.query(select_timezones, (err, result) => {
      if (err) throw err;

      res.send(result)
    });
};

let cities = (req, res) => {

    let select_timezones = `SELECT timezone FROM timezones WHERE country = ?`;
    con.query(select_timezones, [req.query.country], (err, result2) => {
      if (err) throw err;

      res.send(result2);
    });
};

module.exports = { timezone_converter, country, cities };