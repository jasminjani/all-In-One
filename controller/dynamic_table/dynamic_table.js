let dynamic_table = (req, res) => {
  try {
    res.render('./dynamic_table/dynamic_table');
  } catch (e) { console.log(e); }
}

module.exports = dynamic_table;