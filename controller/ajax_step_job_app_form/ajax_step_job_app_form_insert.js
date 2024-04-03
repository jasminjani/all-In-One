const mysql = require('mysql');
const bodyParser = require("body-parser");
const con = require('../../database_connection');

// FOR INSERTING DATA

let ajax_step_job_app_form = (req, res) => {
  res.render("./ajax_step_job_app_form/ajax_step_job_app_form");
};

let insert_data_ajax_step_job_app_form = async (req, res) => {

  let person_id;

  let body = req.body;

  let basic_detail_query = `insert into person_basic_detail (first_name, last_name, designation, email, phone_no, gender, relationship_status, address_1, address_2, city, state, zipcode, dob) values 
        ('${body.first_name}', '${body.last_name}', '${body.designation}', '${body.email}', '${body.phone_no}', '${body.gender}', '${body.relationship_status}', '${body.address_1}', '${body.address_2}', '${body.city}', '${body.state}', '${body.zipcode}', '${body.dob}' )`;

  await con.query(basic_detail_query, (err, result) => {
    if (err) throw err;

    person_id = result.insertId;

    let education_detail_query;

    for (let i = 0; i < req.body.board_or_university.length; i++) {
      let education;
      if (i == 0) { education = 'SSC' }
      else if (i == 1) { education = 'HSC' }
      else if (i == 2) { education = 'bachelor' }
      else if (i == 3) { education = 'master' }

      if ((body.board_or_university[i] == 'select_master')) { }
      else {

        education_detail_query = ` insert into education_detail (person_id, education, board_or_university, passing_year, percentage) values ( '${person_id}' , '${education}', '${body.board_or_university[i]}', '${body.passing_year[i]}', '${body.percentage[i]}')`;

        con.query(education_detail_query, (err, result2) => {
          if (err) throw err;

        });
      }
    }

    let work_experience_query;

    for (let i = 0; i < req.body.company_name.length; i++) {

      if (body.company_name[i] == null || body.company_name[i].trim() == '') { }
      else {
        work_experience_query = `insert into work_experience (person_id, company_name, past_designation, start_date, end_date) values ('${person_id}', '${body.company_name[i]}', '${body.past_designation[i]}', '${body.start_date[i]}', '${body.end_date[i]}')`;

        con.query(work_experience_query, (err, result3) => {
          if (err) throw err;

        });
      }
    }

    let reference_contact_query;

    for (let i = 0; i < req.body.ref_name.length; i++) {

      if (body.ref_name[i] == null || body.ref_name[i].trim() == '') { }
      else {

        reference_contact_query = `insert into reference_contact (person_id, ref_name, ref_phone_no, ref_relation) values ('${person_id}', '${body.ref_name[i]}', '${body.ref_phone_no[i]}', '${body.ref_relation[i]}')`;

        con.query(reference_contact_query, (err, result4) => {
          if (err) throw err;

        });
      }
    }


    let location_1;
    if (typeof (body.location_1) == "object") {
      location_1 = body.location_1;
    } else {
      location_1 = [];
      location_1.push(body.location_1);
    }

    let preferances_query = `insert into preferances (person_id, location_1, location_2, location_3, notice_period_in_month, expected_ctc, current_ctc, department) values ('${person_id}', '${location_1[0]}', '${location_1[1]}', '${location_1[2]}', '${body.notice_period_in_month}', '${body.expected_ctc}', '${body.current_ctc}', '${body.department}')`;

    con.query(preferances_query, (err, result5) => {
      if (err) throw err;
    });

    let technology_known_query;

    let technology_name = req.body.technology_name;

    if (technology_name == undefined) { }
    else {
      for (let i = 0; i < req.body.technology_name.length; i++) {

        let tech_stage;
        if (typeof (body.technology_name) == "string") {
          if (body.technology_name == 'php') { tech_stage = body.tech_stage_1 }
          else if (body.technology_name == 'mysql') { tech_stage = body.tech_stage_2 }
          else if (body.technology_name == 'laravel') { tech_stage = body.tech_stage_3 }
          else if (body.technology_name == 'oracle') { tech_stage = body.tech_stage_4 }
        }

        if (typeof (body.technology_name) == "object") {
          if (body.technology_name[i] == 'php') { tech_stage = body.tech_stage_1 }
          else if (body.technology_name[i] == 'mysql') { tech_stage = body.tech_stage_2 }
          else if (body.technology_name[i] == 'laravel') { tech_stage = body.tech_stage_3 }
          else if (body.technology_name[i] == 'oracle') { tech_stage = body.tech_stage_4 }
        }

        if (typeof (body.technology_name) == "string") {
          technology_known_query = `insert into technology_known (person_id, technology_name, tech_stage) values ('${person_id}', '${body.technology_name}', '${tech_stage}')`;
        } else {
          technology_known_query = `insert into technology_known (person_id, technology_name, tech_stage) values ('${person_id}', '${body.technology_name[i]}', '${tech_stage}')`;
        }

        con.query(technology_known_query, (err, result6) => {
          if (err) throw err;

        });
        if (typeof (body.technology_name) == "string") { break; }
      };
    }


    let launguage_known_query;

    if (req.body.launguage_name == undefined) { }
    else {

      for (let i = 0; i < req.body.launguage_name.length; i++) {

        let lan_can;
        let each_lang
        if (typeof (body.launguage_name) == "string") {
          if (body.launguage_name == 'hindi') { lan_can = body.lan_hindi }
          if (body.launguage_name == 'english') { lan_can = body.lan_english }
          if (body.launguage_name == 'gujarati') { lan_can = body.lan_gujarati }
          each_lang = body.launguage_name
        }

        if (typeof (body.launguage_name) == "object") {
          if (body.launguage_name[i] == 'hindi') { lan_can = body.lan_hindi }
          if (body.launguage_name[i] == 'english') { lan_can = body.lan_english }
          if (body.launguage_name[i] == 'gujarati') { lan_can = body.lan_gujarati }
          each_lang = body.launguage_name[i];
        }

        for (let j = 0; j < lan_can.length; j++) {

          if (typeof (lan_can) == "string") {
            launguage_known_query = `insert into launguage_known (person_id, launguage_name, lan_can) values ('${person_id}', '${each_lang}', '${lan_can}')`;
          } else {
            launguage_known_query = `insert into launguage_known (person_id, launguage_name, lan_can) values ('${person_id}', '${each_lang}', '${lan_can[j]}')`;
          }

          con.query(launguage_known_query, (err, result7) => {
            if (err) throw err;

          });
          if (typeof (lan_can) == "string") { break; }
        };
        if (typeof (body.launguage_name) == "string") { break; }
      }
    }
  })
  res.end();
}

module.exports = { ajax_step_job_app_form, insert_data_ajax_step_job_app_form };
