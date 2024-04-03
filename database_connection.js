const mysql = require('mysql');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: process.env.database,
  dateStrings: true
})

con.connect((err) => {
  if (err) throw err;
})

module.exports = con;