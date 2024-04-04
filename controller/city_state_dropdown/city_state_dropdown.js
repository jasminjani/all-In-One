const con = require('../../database_connection');

let city_state_dropdown = (req, res) => {
  try {
    res.render('./city_state_dropdown/city_state_dropdown');
  } catch (e) { console.log(e); }
};

let state = (req, res) => {
  try {

    let select_state = `SELECT distinct(state) FROM state_cities order by state`;
    con.query(select_state, (err, result) => {
      if (err) throw err;

      res.send(result)
    });
  } catch (e) { console.log(e); }
};

let city = (req, res) => {
  try {

    let select_city = `SELECT city FROM state_cities WHERE state = ? order by city`;
    con.query(select_city, [req.query.state], (err, result2) => {
      if (err) throw err;

      res.send(result2);
    });
  } catch (e) { console.log(e); }
}

module.exports = { city_state_dropdown, state, city };