const con = require('../../database_connection');

let timezone_converter = (req, res) => {
  try {
    res.render('./timezone_converter/timezone_converter');
  } catch (e) { console.log(e); }
};

let country = (req, res) => {
  try {

    let select_timezones = `SELECT distinct(country) FROM timezones order by country`;
    con.query(select_timezones, (err, result) => {
      if (err) throw err;

      res.send(result)
    });
  } catch (e) { console.log(e); }
};

let cities = (req, res) => {
  try {

    let select_timezones = `SELECT timezone FROM timezones WHERE country = ?`;
    con.query(select_timezones, [req.query.country], (err, result2) => {
      if (err) throw err;

      res.send(result2);
    });
  } catch (e) { console.log(e); }
};

module.exports = { timezone_converter, country, cities };