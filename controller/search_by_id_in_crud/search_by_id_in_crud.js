const con = require('../../database_connection');

let search_by_id = (req, res) => {

  try {
    let s_id = req.query.input;
    if (s_id == undefined) {
      s_id = 0;
    }

    let select = `SELECT * FROM student_master WHERE s_id IN (?) `;

    con.query(select, [s_id], (err, result) => {
      if (err) throw err;
      res.render('./search_by_id_in_crud/search_by_id', { data: result, s_id: s_id });
    });
  } catch (e) { console.log(e); }
}

let show_more_ways = (req, res) => {

  try {

    let first_name = req.query.first_name;
    let last_name = req.query.last_name;
    let gender = req.query.gender;
    let email = req.query.email;
    let phone_no = req.query.phone_no;
    let option = req.query.option;

    let select;
    if (option == undefined) {
      select = `SELECT * FROM student_master WHERE first_name = ? OR last_name = ? OR gender = ? OR email = ? OR phone_no = ?`
    } else {
      select = `SELECT * FROM student_master WHERE first_name LIKE '${first_name}%' ${option} last_name LIKE '${last_name}%' ${option} gender LIKE '${gender}%' ${option} email LIKE '${email}%' ${option} phone_no LIKE '${phone_no}%'`
    }

    con.query(select, [first_name, last_name, gender, email, phone_no], (err, result) => {
      if (err) throw err;
      res.render('./search_by_id_in_crud/show_more_ways', { data: result, first_name: first_name, last_name: last_name, gender: gender, email: email, phone_no: phone_no, option: option });
    });
  } catch (e) { console.log(e); }
}


module.exports = { search_by_id, show_more_ways };
