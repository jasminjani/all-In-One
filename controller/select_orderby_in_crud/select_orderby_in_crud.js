const con = require('../../database_connection');
let total_record = 1000;
let pagesize = 200;

let details = (req, res) => {
  try {

    if (req.query["page"] == undefined) {
      let select = "SELECT * FROM student_master_2 LIMIT ?";

      con.query(select, [pagesize], (err, result) => {
        if (err) throw err;

        res.render('./select_orderby_in_crud/details', { page: 1, total_record: total_record, pagesize: pagesize, data: result });
      });
    }
    else {

      let last_record = pagesize * (req.query["page"] - 1);
      // let last_record = pagesize * (req.query.page - 1);

      let select = "SELECT * FROM student_master_2 LIMIT ?,?";
      con.query(select, [last_record, pagesize], (err, result) => {
        if (err) throw err;

        res.render('./select_orderby_in_crud/details', { page: req.query["page"], total_record: total_record, pagesize: pagesize, data: result });
      });
    }
  } catch (e) { console.log(e); }
}


let orderby = (req, res) => {

  try {

    if (req.query["page"] == undefined) {
      let select = "SELECT * FROM student_master_2 ORDER BY first_name,city LIMIT ?  ";

      con.query(select, [pagesize], (err, result) => {
        if (err) throw err;

        res.render('./select_orderby_in_crud/order_by', { page: 1, total_record: total_record, pagesize: pagesize, data: result });
      });
    }

    else {
      let last_record = pagesize * (req.query["page"] - 1);

      let select = "SELECT * FROM student_master_2 ORDER BY first_name, city LIMIT ?,?";
      con.query(select, [last_record, pagesize], (err, result) => {
        if (err) throw err;

        res.render('./select_orderby_in_crud/order_by', { page: req.query["page"], total_record: total_record, pagesize: pagesize, data: result });
      });
    }
  } catch (e) { console.log(e); }
}

module.exports = { details, orderby };