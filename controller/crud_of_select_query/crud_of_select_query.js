const con = require('../../database_connection');
let pagesize = 25;

let crud_of_select_query = (req, res) => {
  try {

    let input_query = req.query.input;
    let select = input_query + ` LIMIT ?`;

    if (input_query == null) {
      select = `select * from student_master where s_id < 26`;
      input_query = `select * from student_master where s_id < 26`;
    }

    con.query(`select count(*) as total_record from (${input_query}) as total_record`, (err, total_record) => {
      if (err) { console.log(err) };
      let last;

      if (total_record != undefined) {
        total_record = JSON.parse(JSON.stringify(total_record));
        last = Math.ceil(total_record[0].total_record / pagesize);
      } else if (total_record == undefined) {
        last = 1;
      }

      if (req.query["page"] == undefined) {

        con.query(select, [pagesize], (err, result) => {
          if (err) { console.log(err); };

          res.render('./crud_of_select_query/crud_of_select_query', { data: result, page: 1, last: last, input_query: input_query, select: select });
        });
      }
      else {

        let last_record = pagesize * (req.query["page"] - 1);

        select = input_query + ` LIMIT ?,?`;

        con.query(select, [last_record, pagesize], (err, result) => {
          if (err) { console.log(err); };

          res.render('./crud_of_select_query/crud_of_select_query', { data: result, page: req.query["page"], last: last, input_query: input_query, select: select });
        });
      }
    })
  } catch (e) { console.log(e); }
}

module.exports = crud_of_select_query;