const cookieParser = require('cookie-parser');

// ======== DASHBOARD ===========

let dashboard = (req, res) => {
  try {
    res.render("./index/dashboard")
  } catch (e) { console.log(e); }
};

// ======== LOGOUT FROM DASHBOARD ========

let logout = (req, res) => {
  try {
    delete req.body.email;
    res.clearCookie("token").redirect('/login');
  } catch (e) { console.log(e); }
};

module.exports = { dashboard, logout }