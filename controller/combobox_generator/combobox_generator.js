const con = require('../../database_connection');

let combobox_generator = (req, res) => {
  try {

    let input = req.query.input;

    let select = `SELECT * FROM select_master JOIN option_master ON select_master.s_id = option_master.s_id WHERE select_master.select_name = ?`;

    con.query(select, [input], (err, result) => {
      if (err) throw err;
      res.render('./combobox_generator/combobox_generator', { data: result, input: input });
    });
  } catch (e) { console.log(e); }
};

module.exports = combobox_generator;