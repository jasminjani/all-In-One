const con = require('../../database_connection');

let delimiter_search = (req, res) => {
  try {

    let input = req.query.input;

    if (input == undefined) {
      input = ""
    }
    let trim_input = input.trim();
    let str = trim_input.replaceAll("_", "&_").replaceAll("^", "&^").replaceAll("$", "&$").replaceAll("}", "&}").replaceAll("{", "&{").replaceAll(":", "&:").split('&');

    str.shift(); // because first element of array is null

    let first_name = [];
    let last_name = [];
    let email = [];
    let dob = [];
    let phone_no = [];
    let city = [];

    str.forEach(element => {
      let del = element.charAt(0);

      switch (del) {
        case "_":
          first_name.push(element.slice(1, element.length).trim())
          break;

        case "^":
          last_name.push(element.slice(1, element.length).trim())
          break;

        case "$":
          email.push(element.slice(1, element.length).trim())
          break;

        case "}":
          dob.push(element.slice(1, element.length).trim())
          break;

        case "{":
          phone_no.push(element.slice(1, element.length).trim())
          break;

        case ":":
          city.push(element.slice(1, element.length).trim())
          break;

        default:
          break;
      }
    });

    let select = `SELECT * FROM student_master_2 WHERE ( `
    if (first_name.length > 0) {
      for (let i = 0; i < first_name.length; i++) {
        select = select + `first_name LIKE '${first_name[i]}%' OR `
      }
      select = select.slice(0, select.length - 3) + `) AND ( `;
    }
    if (last_name.length > 0) {
      for (let i = 0; i < last_name.length; i++) {
        select = select + `last_name LIKE '${last_name[i]}%' OR `
      }
      select = select.slice(0, select.length - 3) + `) AND ( `;
    }
    if (email.length > 0) {
      for (let i = 0; i < email.length; i++) {
        select = select + `email LIKE '${email[i]}%' OR `
      }
      select = select.slice(0, select.length - 3) + `) AND ( `;
    }
    if (dob.length > 0) {
      for (let i = 0; i < dob.length; i++) {
        select = select + `dob LIKE '${dob[i]}%' OR `
      }
      select = select.slice(0, select.length - 3) + `) AND ( `;
    }
    if (phone_no.length > 0) {
      for (let i = 0; i < phone_no.length; i++) {
        select = select + `phone_no LIKE '${phone_no[i]}%' OR `
      }
      select = select.slice(0, select.length - 3) + `) AND ( `;
    }
    if (city.length > 0) {
      for (let i = 0; i < city.length; i++) {
        select = select + `city LIKE '${city[i]}%' OR `
      }
      select = select.slice(0, select.length - 3) + `) AND ( `;
    }
    select = select.slice(0, select.length - 6);



    con.query(select, (err, result) => {
      if (err) throw err;
      res.render('./delimiter_search/delimiter_search', { data: result, input: input });
    });
  } catch (e) { console.log(e); }
}

module.exports = delimiter_search;