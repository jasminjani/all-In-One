const md5 = require('md5');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const con = require('../../database_connection');

// ====== LOGIN PAGE ==========

let login = (req, res) => {
  try {
    res.render('./index/login');
  } catch (e) { console.log(e); }
};

let check_login = (req, res) => {

  try {

    select_user_registration = `SELECT u_id, email, password, salt, activation_code FROM user_registrations WHERE email = ? `;

    con.query(select_user_registration, [req.body.email], (err, result) => {
      if (err) throw err;

      if (result[0] == undefined) {
        res.send({ a: "email nahi mila" });
      }
      else {

        let password = req.body.password;

        let salt = result[0].salt;
        let pass_salt = password + salt;
        let md5_pass = md5(pass_salt);

        if (md5_pass == result[0].password) {

          let token = jwt.sign({ email: result[0].email }, process.env.secret_key);
          res.cookie("token", token, { maxAge: 1 * 60 * 60 * 1000 });

          res.send({ data: result });
        } else {
          res.send({ b: "Enter valid details" });
        }
      }
    });
  } catch (e) { console.log(e); }
};

module.exports = { login, check_login }