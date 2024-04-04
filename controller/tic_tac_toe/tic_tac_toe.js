let tic_tac_toe = (req, res) => {
  try {
    res.render("./tic_tac_toe/tic_tac_toe");
  } catch (e) { console.log(e); }
}

module.exports = tic_tac_toe;