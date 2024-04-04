const randomize = require('randomatic');
const md5 = require('md5');
const con = require('../../database_connection');


// ===== PASSWORD VERIFICATION ======

let create_password = (req, res) => {

  try {

    let select_create_time = `SELECT created_at, activation_code FROM user_registrations WHERE activation_code = ?`;

    con.query(select_create_time, [req.params.activation], (err, result) => {
      if (err) throw err;

      let curr_time = new Date();
      let created_time = new Date(result[0].created_at);

      let time_diff_in_sec = (curr_time - created_time) / 1000;

      if (time_diff_in_sec < 60) { // after 60 seconds link will be expired. 
        res.render('./index/password');
      }
      else {
        res.write("session time out");
        res.end()
      }
    })
  } catch (e) { console.log(e); }
};


// ====== FORGOT PASSWORD PAGE ========

let forgot_password = (req, res) => {
  try {
    res.render('./index/password');
  } catch (e) { console.log(e); }
};

// ====== PASSWORD VERIFICATION AND FORGOT PASSWORD PAGE POST REQUEST ========

let update_password = (req, res) => {
  try {

    let password = req.body.password;
    let salt = randomize('Aa0!', 4);
    let pass_salt = password + salt
    let md5_pass = md5(pass_salt);

    let update_user_registration = `UPDATE user_registrations SET password = ?, salt = ?, status = ? WHERE activation_code = ?`;

    con.query(update_user_registration, [md5_pass, salt, "1", req.params.activation], (err, result) => {
      if (err) throw err;
      res.send({ data: result })
    })
  } catch (e) { console.log(e); }
};


// ====== LOGIN PAGE FORGOT PASSWORD ========

let login_forgot_password = (req, res) => {
  try {

    select_user_registration = `SELECT u_id, email, password, salt, activation_code FROM user_registrations WHERE email = ? `;

    con.query(select_user_registration, [req.body.email], (err, result) => {
      if (err) throw err;

      if (result[0] == undefined) {
        res.send({ a: "email does not exist" });
      }
      else {
        res.send({ data: result });
      }
    });
  } catch (e) { console.log(e); }
};

module.exports = { create_password, forgot_password, update_password, login_forgot_password };
