const mysql = require('mysql');
const bodyParser = require("body-parser");
const con = require('../../database_connection');

// FOR DISPLAY DATA

let display_data_step_form = async (req, res) => {

  let person_id = req.params.id;

  let select_basic_detail = `SELECT * FROM person_basic_detail where person_id = ?`;

  await con.query(select_basic_detail, [person_id], async (err, result) => {
    if (err) throw err;

    let select_edu_detail = `SELECT * FROM education_detail where person_id = ?`;

    await con.query(select_edu_detail, [person_id], async (err, result2) => {
      if (err) throw err;

      let select_work_exp = `SELECT * FROM work_experience where person_id = ?`;

      await con.query(select_work_exp, [person_id], async (err, result3) => {
        if (err) throw err;

        let select_ref_contact = `SELECT * FROM reference_contact where person_id = ?`;

        await con.query(select_ref_contact, [person_id], async (err, result4) => {
          if (err) throw err;

          let select_preferences = `SELECT * FROM preferances where person_id = ?`;

          await con.query(select_preferences, [person_id], async (err, result5) => {
            if (err) throw err;

            let select_tech_known = `SELECT * FROM technology_known where person_id = ?`;

            await con.query(select_tech_known, [person_id], async (err, result6) => {
              if (err) throw err;

              let select_lang_known = `SELECT person_id,launguage_name ,GROUP_CONCAT( lan_can separator ', ' ) as level FROM launguage_known where person_id = ? group by person_id,launguage_name;`;

              await con.query(select_lang_known, [person_id], (err, result7) => {
                if (err) throw err;

                result7.forEach(element => {
                  element.level = element.level.split(", ");
                });

                res.send({ person_id: person_id, data: result, data2: result2, data3: result3, data4: result4, data5: result5, data6: result6, data7: result7 })
              });
            });
          });
        });
      });
    });
  });
};


// FOR UPDATING DATA

let update_data_step_form = (req, res) => {
  res.render('./ajax_step_job_app_form/ajax_step_job_app_form')
};

let post_update_data_step_form = async (req, res) => {

  let body = req.body;
  let person_id = req.params.id;

  let update_basic_detail = `UPDATE person_basic_detail SET first_name = ?, last_name = ?, designation = ?, email = ?, phone_no = ?, gender = ?, relationship_status = ?, address_1 = ?, address_2 = ?, city = ?, state = ?, zipcode = ?, dob = ? WHERE person_id = ?`;

  await con.query(update_basic_detail, [body.first_name, body.last_name, body.designation, body.email, body.phone_no, body.gender, body.relationship_status, body.address_1, body.address_2, body.city, body.state, body.zipcode, body.dob, person_id], async (err, result11) => {
    if (err) throw err;

    let update_edu_detail;

    for (let i = 0; i < req.body.board_or_university.length; i++) {
      let education;
      if (i == 0) { education = 'SSC' }
      else if (i == 1) { education = 'HSC' }
      else if (i == 2) { education = 'bachelor' }
      else if (i == 3) { education = 'master' }

      if ((body.board_or_university[i] == 'select_master')) { }
      else {

        update_edu_detail = `UPDATE education_detail SET education = ?, board_or_university = ?, passing_year = ?, percentage = ? WHERE person_id = ? AND education = ?`;

        con.query(update_edu_detail, [education, body.board_or_university[i], body.passing_year[i], body.percentage[i], person_id, education], (err, result12) => {
          if (err) throw err;

        });
      }
    }

    let update_work_exp;

    for (let i = 0; i < req.body.company_name.length; i++) {

      if (body.company_name[i] == null || body.company_name[i].trim() == '') { }
      else {

        update_work_exp = `UPDATE work_experience SET company_name = ?, past_designation = ?, start_date = ?, end_date = ? WHERE work_id = ?`;

        con.query(update_work_exp, [body.company_name[i], body.past_designation[i], body.start_date[i], body.end_date[i], body.work_id[i]], (err, result13) => {
          if (err) throw err;

        });
      }
    }

    let update_ref_contact;

    for (let i = 0; i < req.body.ref_name.length; i++) {

      if (body.ref_name[i] == null || body.ref_name[i].trim() == '') { }
      else {

        update_ref_contact = `UPDATE reference_contact SET ref_name = ?, ref_phone_no = ?, ref_relation = ? WHERE reference_id = ?`;

        con.query(update_ref_contact, [body.ref_name[i], body.ref_phone_no[i], body.ref_relation[i], body.reference_id[i]], (err, result14) => {
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

    let update_preferances = `UPDATE preferances SET location_1 = '${location_1[0]}', location_2 = '${location_1[1]}', location_3 = '${location_1[2]}', notice_period_in_month =?, expected_ctc = ?, current_ctc = ?, department = ? WHERE preference_id = ?`;

    con.query(update_preferances, [body.notice_period_in_month, body.expected_ctc, body.current_ctc, body.department, body.preference_id], (err, result15) => {
      if (err) throw err;

    });

    let update_tech_known;

    let technology_name = req.body.technology_name;

    if (technology_name == undefined) { }
    else {
      for (let i = 0; i < req.body.technology_name.length; i++) {

        tech_id = req.body.tech_id.split(",");

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
          update_tech_known = `UPDATE technology_known SET technology_name = '${body.technology_name}', tech_stage = '${tech_stage}' WHERE tech_id = '${tech_id[i]}'`;
        } else {
          update_tech_known = `UPDATE technology_known SET technology_name = '${body.technology_name[i]}', tech_stage = '${tech_stage}' WHERE tech_id = '${tech_id[i]}'`;
        }

        con.query(update_tech_known, (err, result16) => {
          if (err) throw err;

        });
        if (typeof (body.technology_name) == "string") { break; }
      };
    }

    let delete_lan_known = `delete from launguage_known where person_id = ?`;

    await con.query(delete_lan_known, [person_id], (err, result18) => {
      if (err) throw err;
    });

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

          await con.query(launguage_known_query, (err, result7) => {
            if (err) throw err;

          });
          if (typeof (lan_can) == "string") { break; }
        };
        if (typeof (body.launguage_name) == "string") { break; }
      }
    }

    res.write("data updated succesfully");
    res.end();
  });
}

module.exports = { display_data_step_form, update_data_step_form, post_update_data_step_form };