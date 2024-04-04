
let basic_detail = document.getElementById('basic_detail');
let education_detail = document.getElementById('education_detail');
let work_exp = document.getElementById('work_exp');
let lan_known = document.getElementById('lan_known');
let tech_known = document.getElementById('tech_known');
let ref_contact = document.getElementById('ref_contact');
let Preferances = document.getElementById('Preferances');


async function display_data() {
  try {

    let id = window.location.href.split("/").pop()
    url = `http://localhost:9027/ajax_step_job_app_form/display/${id}`;
    let response = await fetch(url);
    let all_data = await response.json();
    fill_data(all_data);
  } catch (e) { console.log(e); }
}

let curr_url = window.location.href.split('/');
curr_url.pop();
if (curr_url.pop() == "update") {
  try {
    display_data();
  } catch (e) { console.log(e); }
}

async function ajax1_fetch() {
  try {

    let err = [];

    if (Preferances.style.display == "block") {

      err.push(number_validation('notice_period_in_month', 'notice_period_in_month_validation'));
      err.push(number_validation('expected_ctc', 'expected_ctc_validation'));
      err.push(number_validation('current_ctc', 'current_ctc_validation'));
      err.push(dropdown_validation('department', 'select_department', 'department_validation'));

    }

    if (err.includes(false)) {
      return false;
    }

    const form = document.getElementById('form');
    const obj = new URLSearchParams(new FormData(form));

    let url;
    let id;

    let curr_url = window.location.href.split('/');
    curr_url.pop();
    let url_contain = curr_url.pop();
    if (url_contain == "localhost:9027") {
      url = "http://localhost:9027/ajax_step_job_app_form/post";
    }
    else if (url_contain == "update") {
      id = window.location.href.split("/").pop()
      url = `http://localhost:9027/ajax_step_job_app_form/update/${id}`;
    }

    let res1 = await fetch(url,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "POST",
        body: obj
      })
  } catch (e) { console.log(e); }
}






function form_validation() {
  try {

    let err = [];

    if (basic_detail.style.display == "block") {


      err.push(name_validation('first_name', 'first_name_validation'));
      err.push(name_validation('last_name', 'last_name_validation'));
      err.push(not_null_validation('designation', 'designation_validation'));
      err.push(not_null_validation('address_1', 'address_1_validation'));
      err.push(not_null_validation('address_2', 'address_2_validation'));
      err.push(email_validation_with_regex('email', 'email_validation'));
      err.push(phone_no_validation_with_regex('phone_no', 'phone_no_validation'));
      err.push(not_null_validation('city', 'city_validation'));
      err.push(gender_validation('male', 'female', 'gender_validation'));
      err.push(dropdown_validation('state', 'select_state', 'state_validation'));
      err.push(dropdown_validation('relationship_status', 'select_relationship_status', 'relationship_status_validation'));
      err.push(zipcode_validation('zipcode', 'zipcode_validation'));
      err.push(date_validation_with_regex('dob', 'dob_validation'));

    }


    if (education_detail.style.display == "block") {

      err.push(dropdown_validation('board_or_university_1', 'select_ssc', 'board_or_university_1_validation'));
      err.push(year_validation_with_regex('passing_year_1', 'passing_year_1_validation'));
      err.push(percentage_validation_with_regex('percentage_1', 'percentage_1_validation'));
      err.push(dropdown_validation('board_or_university_2', 'select_hsc', 'board_or_university_2_validation'));
      err.push(year_validation_with_regex('passing_year_2', 'passing_year_2_validation'));
      err.push(percentage_validation_with_regex('percentage_2', 'percentage_2_validation'));
      err.push(dropdown_validation('board_or_university_3', 'select_bachlor', 'board_or_university_3_validation'));
      err.push(year_validation_with_regex('passing_year_3', 'passing_year_3_validation'));
      err.push(percentage_validation_with_regex('percentage_3', 'percentage_3_validation'));

      if ((!(document.getElementById('board_or_university_4').value == "select_master")) ||
        (!(document.getElementById('passing_year_4').value.trim() == null || document.getElementById('passing_year_4').value.trim() == "")) ||
        (!(document.getElementById('percentage_4').value.trim() == null || document.getElementById('percentage_4').value.trim() == ""))) {

        err.push(dropdown_validation('board_or_university_4', 'select_master', 'board_or_university_4_validation'));
        err.push(year_validation_with_regex('passing_year_4', 'passing_year_4_validation'));
        err.push(percentage_validation_with_regex('percentage_4', 'percentage_4_validation'));
      }

    }


    if (work_exp.style.display == "block") {

      if ((!(document.getElementById('company_name_1').value.trim() == null || document.getElementById('company_name_1').value.trim() == "")) ||
        (!(document.getElementById('past_designation_1').value.trim() == null || document.getElementById('past_designation_1').value.trim() == "")) ||
        (!(document.getElementById('start_date_1').value.trim() == null || document.getElementById('start_date_1').value.trim() == "")) ||
        (!(document.getElementById('end_date_1').value.trim() == null || document.getElementById('end_date_1').value.trim() == ""))) {

        err.push(not_null_validation('company_name_1', 'company_name_1_validation'));
        err.push(not_null_validation('past_designation_1', 'past_designation_1_validation'));
        err.push(date_validation_with_regex('start_date_1', 'start_date_1_validation'));
        err.push(date_validation_with_regex('end_date_1', 'end_date_1_validation'));
      }

      if ((!(document.getElementById('company_name_2').value.trim() == null || document.getElementById('company_name_2').value.trim() == "")) ||
        (!(document.getElementById('past_designation_2').value.trim() == null || document.getElementById('past_designation_2').value.trim() == "")) ||
        (!(document.getElementById('start_date_2').value.trim() == null || document.getElementById('start_date_2').value.trim() == "")) ||
        (!(document.getElementById('end_date_2').value.trim() == null || document.getElementById('end_date_2').value.trim() == ""))) {

        err.push(not_null_validation('company_name_2', 'company_name_2_validation'));
        err.push(not_null_validation('past_designation_2', 'past_designation_2_validation'));
        err.push(date_validation_with_regex('start_date_2', 'start_date_2_validation'));
        err.push(date_validation_with_regex('end_date_2', 'end_date_2_validation'));
      }

      if ((!(document.getElementById('company_name_3').value.trim() == null || document.getElementById('company_name_3').value.trim() == "")) ||
        (!(document.getElementById('past_designation_3').value.trim() == null || document.getElementById('past_designation_3').value.trim() == "")) ||
        (!(document.getElementById('start_date_3').value.trim() == null || document.getElementById('start_date_3').value.trim() == "")) ||
        (!(document.getElementById('end_date_3').value.trim() == null || document.getElementById('end_date_3').value.trim() == ""))) {

        err.push(not_null_validation('company_name_3', 'company_name_3_validation'));
        err.push(not_null_validation('past_designation_3', 'past_designation_3_validation'));
        err.push(date_validation_with_regex('start_date_3', 'start_date_3_validation'));
        err.push(date_validation_with_regex('end_date_3', 'end_date_3_validation'));
      }

    }


    if (lan_known.style.display == "block") {

      // for launguage known validation

      let hindi = document.getElementById('launguage_name_1');
      let lan_hindi = document.getElementsByName('lan_hindi');

      if (((hindi.checked) && !(lan_hindi[0].checked || lan_hindi[1].checked || lan_hindi[2].checked)) || (!(hindi.checked) && (lan_hindi[0].checked || lan_hindi[1].checked || lan_hindi[2].checked))) {

        document.getElementById('lan_hindi_validation').innerHTML = "select option";
        return false;
      }

      let english = document.getElementById('launguage_name_2');
      let lan_english = document.getElementsByName('lan_english');

      if (((english.checked) && !(lan_english[0].checked || lan_english[1].checked || lan_english[2].checked)) || (!(english.checked) && (lan_english[0].checked || lan_english[1].checked || lan_english[2].checked))) {

        document.getElementById('lan_english_validation').innerHTML = "select option";
        return false;
      }

      let gujarati = document.getElementById('launguage_name_3');
      let lan_gujarati = document.getElementsByName('lan_gujarati');

      if (((gujarati.checked) && !(lan_gujarati[0].checked || lan_gujarati[1].checked || lan_gujarati[2].checked)) || (!(gujarati.checked) && (lan_gujarati[0].checked || lan_gujarati[1].checked || lan_gujarati[2].checked))) {

        document.getElementById('lan_gujarati_validation').innerHTML = "select option";
        return false;
      }
    }


    if (tech_known.style.display == "block") {

      // for technology known validation

      let php = document.getElementById('technology_name_1');
      let tech_stage_1 = document.getElementsByName('tech_stage_1');

      if (((php.checked) && !(tech_stage_1[0].checked || tech_stage_1[1].checked || tech_stage_1[2].checked)) || (!(php.checked) && (tech_stage_1[0].checked || tech_stage_1[1].checked || tech_stage_1[2].checked))) {

        document.getElementById('tech_stage_1_validation').innerHTML = "select option";
        return false;
      }

      let mysql = document.getElementById('technology_name_2');
      let tech_stage_2 = document.getElementsByName('tech_stage_2');

      if (((mysql.checked) && !(tech_stage_2[0].checked || tech_stage_2[1].checked || tech_stage_2[2].checked)) || (!(mysql.checked) && (tech_stage_2[0].checked || tech_stage_2[1].checked || tech_stage_2[2].checked))) {

        document.getElementById('tech_stage_2_validation').innerHTML = "select option";
        return false;
      }

      let laravel = document.getElementById('technology_name_3');
      let tech_stage_3 = document.getElementsByName('tech_stage_3');

      if (((laravel.checked) && !(tech_stage_3[0].checked || tech_stage_3[1].checked || tech_stage_3[2].checked)) || (!(laravel.checked) && (tech_stage_3[0].checked || tech_stage_3[1].checked || tech_stage_3[2].checked))) {

        document.getElementById('tech_stage_3_validation').innerHTML = "select option";
        return false;
      }

      let oracle = document.getElementById('technology_name_4');
      let tech_stage_4 = document.getElementsByName('tech_stage_4');

      if (((oracle.checked) && !(tech_stage_4[0].checked || tech_stage_4[1].checked || tech_stage_4[2].checked)) || (!(oracle.checked) && (tech_stage_4[0].checked || tech_stage_4[1].checked || tech_stage_4[2].checked))) {

        document.getElementById('tech_stage_4_validation').innerHTML = "select option";
        return false;
      }
    }


    if (ref_contact.style.display == "block") {

      err.push(name_validation('ref_name_1', 'ref_name_1_validation'));
      err.push(phone_no_validation_with_regex('ref_phone_no_1', 'ref_phone_no_1_validation'));
      err.push(not_null_validation('ref_relation_1', 'ref_relation_1_validation'));

      if ((!(document.getElementById('ref_name_2').value.trim() == null || document.getElementById('ref_name_2').value.trim() == "")) ||
        (!(document.getElementById('ref_phone_no_2').value.trim() == null || document.getElementById('ref_phone_no_2').value.trim() == "")) ||
        (!(document.getElementById('ref_relation_2').value.trim() == null || document.getElementById('ref_relation_2').value.trim() == ""))) {

        err.push(name_validation('ref_name_2', 'ref_name_2_validation'));
        err.push(phone_no_validation_with_regex('ref_phone_no_2', 'ref_phone_no_2_validation'));
        err.push(not_null_validation('ref_relation_2', 'ref_relation_2_validation'));
      }

    }


    if (Preferances.style.display == "block") {

      err.push(number_validation('notice_period_in_month', 'notice_period_in_month_validation'));
      err.push(number_validation('expected_ctc', 'expected_ctc_validation'));
      err.push(number_validation('current_ctc', 'current_ctc_validation'));
      err.push(dropdown_validation('department', 'select_department', 'department_validation'));

    }


    if (err.includes(false)) {
      return false;
    }

    return true;

  } catch (e) { console.log(e); }
}



function previous() {
  try {

    let arr = [basic_detail, education_detail, work_exp, lan_known, tech_known, ref_contact, Preferances];

    arr.forEach(element => {

      if (element.style.display == "block") {

        const index = arr.indexOf(element);
        (arr[index - 1]).style.display = "block";

        arr = arr.splice(index, 1);  // this arr only contain ine element, which we splice and we are making only those element disable because other elements are already disabled.so, we are using arr[0] here, which will give only current selected element

        arr[0].style.display = "none";
      }
    });

    if (!(Preferances.style.display == "block")) {

      document.getElementById('save').style.display = "none";
      document.getElementById('next_btn').style.display = "inline";
    }
  } catch (e) { console.log(e); }
}


function next() {
  try {

    if (form_validation() == false) { return false }

    let arr = [basic_detail, education_detail, work_exp, lan_known, tech_known, ref_contact, Preferances];

    arr.forEach(element => {
      if (element.style.display == "block") {

        const index = arr.indexOf(element);
        (arr[index + 1]).style.display = "block";

        arr = arr.splice(index, 1);

        arr[0].style.display = "none";
      }
    });

    if (Preferances.style.display == "block") {

      document.getElementById('save').style.display = "inline";
      document.getElementById('next_btn').style.display = "none";
    }
  } catch (e) { console.log(e); }
};








// ====== NAME VALIDATION ========

function name_validation(input_id, validation_id) { // where input_id is id of input field and validation_id is id of validation field
  try {

    let first_name = document.getElementById(input_id).value.trim();
    let x_replace = input_id.replace("_", " ");

    if (first_name == null || first_name == "") {
      document.getElementById(validation_id).textContent = x_replace + " can not be blank";
      return false;
    }
    else if (!isNaN(first_name)) {
      document.getElementById(validation_id).textContent = x_replace + " can not be number";
      return false;
    }
    return true;
  } catch (e) { console.log(e); }
}


// ========= PHONE NO. VALIDATION ========

function phone_no_validation_with_regex(input_id, validation_id) {
  try {

    let phone_no = document.getElementById(input_id).value.trim();
    let phone_no_regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    if (!phone_no.match(phone_no_regex)) {
      document.getElementById(validation_id).textContent = "phone no must be 10 digit number";
      return false;
    }
    return true;

  } catch (e) { console.log(e); }
}


// ========== EMAIL VALIDATION ======

function email_validation_with_regex(input_id, validation_id) {
  try {

    let email = document.getElementById(input_id).value.trim();
    let email_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email.match(email_format)) {
      document.getElementById(validation_id).textContent = "Enter valid format of email";
      return false;
    }
    return true;
  } catch (e) { console.log(e); }
}


// ========= GENDER VALIDATION =========


function gender_validation(male_id, female_id, validation_id) {
  try {

    let male = document.getElementById(male_id);
    let female = document.getElementById(female_id);

    if (!(male.checked || female.checked)) {
      document.getElementById(validation_id).textContent = "any gender is not checked";
      return false;
    }
    return true;
  } catch (e) { console.log(e); }
}


// ========== ONLY NMBER VALIDATION ========

function number_validation(input_id, validation_id) {
  try {

    let number = document.getElementById(input_id).value.trim();
    let x_replace = input_id.replace("_", " ");

    if (number == null || number == "") {
      document.getElementById(validation_id).textContent = x_replace + " can not be null";
      return false;
    }
    else if (isNaN(number)) {
      document.getElementById(validation_id).textContent = x_replace + " must be number";
      return false;
    }
    return true;
  } catch (e) { console.log(e); }
};


// ======= ONLY NOT NULL VALIDATION =======

function not_null_validation(input_id, validation_id) {
  try {

    let str = document.getElementById(input_id).value.trim();
    let x_replace = input_id.replace("_", " ");

    if (str == null || str == "") {
      document.getElementById(validation_id).textContent = x_replace + " can not be null";
      return false;
    }

    return true;
  } catch (e) { console.log(e); }
}


// ======== 6 DIGIT ZIPCODE VALIDATION ==========

function zipcode_validation(input_id, validation_id) {
  try {

    let zipcode = document.getElementById(input_id).value.trim();
    let zipcode_regex = /^\(?(\d{3})\)?[- ]?(\d{3})$/;

    if (!zipcode.match(zipcode_regex)) {
      document.getElementById(validation_id).textContent = "zipcode must be 6 digit number";
      return false;
    }
    return true;
  } catch (e) { console.log(e); }
}


// =========== DATE VALIDATION =========

function date_validation_with_regex(input_id, validation_id) {
  try {

    let date = document.getElementById(input_id).value.trim();
    let date_regex = /^\d{4}[./-]\d{2}[./-]\d{2}$/;

    if (!date.match(date_regex)) {
      document.getElementById(validation_id).textContent = "formate must be yyyy-mm-dd";
      return false;
    }
    return true;
  } catch (e) { console.log(e); }
}


// ======== ONLY YEAR VALIDATION ==============

function year_validation_with_regex(input_id, validation_id) {
  try {

    let year = document.getElementById(input_id).value.trim();
    let year_regex = /^\d{4}$/;

    if (!year.match(year_regex)) {
      document.getElementById(validation_id).textContent = "formate must be yyyy";
      return false;
    }
    return true;
  } catch (e) { console.log(e); }
}


// ========== PERCENTAGE VALIDATION ===========

function percentage_validation_with_regex(input_id, validation_id) {
  try {

    let percentage = document.getElementById(input_id).value.trim();
    let percentage_regex = /(^100(\.0{1,2})?$)|(^([1-9]([0-9])?|0)(\.[0-9]{1,2})?$)/;

    if (!percentage.match(percentage_regex)) {
      document.getElementById(validation_id).textContent = "formate must be like 00.00";
      return false;
    }
    return true;
  } catch (e) { console.log(e); }
}


// ======= DROP DOWN VALIDATION =============

function dropdown_validation(input_id, value, validation_id,) { // value is first option tag value
  try {

    let select = document.getElementById(input_id);
    let optionSelIndex = select.options[select.selectedIndex].value;
    // let optionSelectedText = select.options[select.selectedIndex].text;
    if (optionSelIndex == value) {
      document.getElementById(validation_id).textContent = "choose value from dropdown"
      return false;
    }
    return true;
  } catch (e) { console.log(e); }
}



// ======= FILL VALUES IN FORM =========


async function fill_data(all_data) {
  try {

    document.getElementById('person_id').value = all_data.data[0].person_id;

    document.getElementById('first_name').value = all_data.data[0].first_name;
    document.getElementById('last_name').value = all_data.data[0].last_name;
    document.getElementById('designation').value = all_data.data[0].designation;
    document.getElementById('address_1').value = all_data.data[0].address_1;
    document.getElementById('email').value = all_data.data[0].email;
    document.getElementById('address_2').value = all_data.data[0].address_2;
    document.getElementById('phone_no').value = all_data.data[0].phone_no;
    document.getElementById('city').value = all_data.data[0].city;

    let gender = document.getElementsByName('gender');
    for (let i = 0; i < gender.length; i++) {
      if (gender[i].value == all_data.data[0].gender) {
        gender[i].checked = true;
      }
    }

    let state = document.getElementById('state');
    for (let i = 0; i < state.length; i++) {
      if (state[i].value == all_data.data[0].state) {
        state[i].selected = true;
      }
    }

    let relationship_status = document.getElementById('relationship_status');
    for (let i = 0; i < relationship_status.length; i++) {
      if (relationship_status[i].value == all_data.data[0].relationship_status) {
        relationship_status[i].selected = true;
      }
    }

    document.getElementById('zipcode').value = all_data.data[0].zipcode;
    document.getElementById('dob').value = all_data.data[0].dob;


    // ==== EDUACATION DETAIL =====

    let board_or_university_1 = document.getElementById('board_or_university_1');
    for (let i = 0; i < board_or_university_1.length; i++) {
      if (board_or_university_1[i].value == all_data.data2[0].board_or_university) {
        board_or_university_1[i].selected = true;
      }
    }

    document.getElementById('passing_year_1').value = all_data.data2[0].passing_year;
    document.getElementById('percentage_1').value = all_data.data2[0].percentage;

    let board_or_university_2 = document.getElementById('board_or_university_2');
    for (let i = 0; i < board_or_university_2.length; i++) {
      if (board_or_university_2[i].value == all_data.data2[1].board_or_university) {
        board_or_university_2[i].selected = true;
      }
    }

    document.getElementById('passing_year_2').value = all_data.data2[1].passing_year;
    document.getElementById('percentage_2').value = all_data.data2[1].percentage;

    let board_or_university_3 = document.getElementById('board_or_university_3');
    for (let i = 0; i < board_or_university_3.length; i++) {
      if (board_or_university_3[i].value == all_data.data2[2].board_or_university) {
        board_or_university_3[i].selected = true;
      }
    }

    document.getElementById('passing_year_3').value = all_data.data2[2].passing_year;
    document.getElementById('percentage_3').value = all_data.data2[2].percentage;

    if (all_data.data2[3]) {

      let board_or_university_4 = document.getElementById('board_or_university_4');
      for (let i = 0; i < board_or_university_4.length; i++) {
        if (board_or_university_4[i].value == all_data.data2[3].board_or_university) {
          board_or_university_4[i].selected = true;
        }
      }

      document.getElementById('passing_year_4').value = all_data.data2[3].passing_year;
      document.getElementById('percentage_4').value = all_data.data2[3].percentage;
    }


    // ===== WORK EXPERIENCE =====

    if (all_data.data3) {
      if (all_data.data3[0]) {
        document.getElementById('work_id_1').value = all_data.data3[0].work_id;
        document.getElementById('company_name_1').value = all_data.data3[0].company_name;
        document.getElementById('past_designation_1').value = all_data.data3[0].past_designation;
        document.getElementById('start_date_1').value = all_data.data3[0].start_date;
        document.getElementById('end_date_1').value = all_data.data3[0].end_date;
      }

      if (all_data.data3[1]) {
        document.getElementById('work_id_2').value = all_data.data3[1].work_id;
        document.getElementById('company_name_2').value = all_data.data3[1].company_name;
        document.getElementById('past_designation_2').value = all_data.data3[1].past_designation;
        document.getElementById('start_date_2').value = all_data.data3[1].start_date;
        document.getElementById('end_date_2').value = all_data.data3[1].end_date;
      }

      if (all_data.data3[2]) {
        document.getElementById('work_id_3').value = all_data.data3[2].work_id;
        document.getElementById('company_name_3').value = all_data.data3[2].company_name;
        document.getElementById('past_designation_3').value = all_data.data3[2].past_designation;
        document.getElementById('start_date_3').value = all_data.data3[2].start_date;
        document.getElementById('end_date_3').value = all_data.data3[2].end_date;
      }
    }


    // ===== LAUNGUAGE KNOWN =======

    let english = null;
    let gujarati = null;
    let hindi = null;

    if (all_data.data7) {
      all_data.data7.forEach(element => {
        if (element.launguage_name == 'english') {
          english = element.level;
        } else if (element.launguage_name == 'gujarati') {
          gujarati = element.level;
        } else if (element.launguage_name == 'hindi') {
          hindi = element.level;
        }
      });
    }

    if (hindi) {
      document.getElementById('launguage_name_1').checked = true;
      if (hindi.includes('read')) {
        document.getElementById('lan_read_1').checked = true;
      }
      if (hindi.includes('write')) {
        document.getElementById('lan_write_1').checked = true;
      }
      if (hindi.includes('speak')) {
        document.getElementById('lan_speak_1').checked = true;
      }
    }

    if (english) {
      document.getElementById('launguage_name_2').checked = true;
      if (english.includes('read')) {
        document.getElementById('lan_read_2').checked = true;
      }
      if (english.includes('write')) {
        document.getElementById('lan_write_2').checked = true;
      }
      if (english.includes('speak')) {
        document.getElementById('lan_speak_2').checked = true;
      }
    }

    if (gujarati) {
      document.getElementById('launguage_name_3').checked = true;
      if (gujarati.includes('read')) {
        document.getElementById('lan_read_3').checked = true;
      }
      if (gujarati.includes('write')) {
        document.getElementById('lan_write_3').checked = true;
      }
      if (gujarati.includes('speak')) {
        document.getElementById('lan_speak_3').checked = true;
      }
    }

    // ===== TECHNOLOGY KNOWN ======

    let tech_id = [];
    let php;
    let php_tech_id;
    let mysql;
    let mysql_tech_id;
    let laravel;
    let laravel_tech_id;
    let oracle;
    let oracle_tech_id;

    if (all_data.data6) {
      for (let i = 0; i < all_data.data6.length; i++) {
        if (all_data.data6[i].technology_name == 'php') {
          php = all_data.data6[i].tech_stage;
          php_tech_id = all_data.data6[i].tech_id;
        } else if (all_data.data6[i].technology_name == 'mysql') {
          mysql = all_data.data6[i].tech_stage;
          mysql_tech_id = all_data.data6[i].tech_id;
        } else if (all_data.data6[i].technology_name == 'laravel') {
          laravel = all_data.data6[i].tech_stage;
          laravel_tech_id = all_data.data6[i].tech_id;
        } else if (all_data.data6[i].technology_name == 'oracle') {
          oracle = all_data.data6[i].tech_stage;
          oracle_tech_id = all_data.data6[i].tech_id;
        }
      }
    }

    if (php_tech_id) { tech_id.push(php_tech_id); }
    if (mysql_tech_id) { tech_id.push(mysql_tech_id); }
    if (laravel_tech_id) { tech_id.push(laravel_tech_id); }
    if (oracle_tech_id) { tech_id.push(oracle_tech_id); }

    if (tech_id) {
      document.getElementById("tech_id").value = tech_id
    }

    if (php) {
      document.getElementById('technology_name_1').checked = true;
      if (php == 'beginer') {
        document.getElementById('Beginer_1').checked = true;
      }
      if (php == 'mideator') {
        document.getElementById('Mideator_1').checked = true;
      }
      if (php == 'expert') {
        document.getElementById('Expert_1').checked = true;
      }
    }

    if (mysql) {
      document.getElementById('technology_name_2').checked = true;
      if (mysql == 'beginer') {
        document.getElementById('Beginer_2').checked = true;
      }
      if (mysql == 'mideator') {
        document.getElementById('Mideator_2').checked = true;
      }
      if (mysql == 'expert') {
        document.getElementById('Expert_2').checked = true;
      }
    }

    if (laravel) {
      document.getElementById('technology_name_3').checked = true;
      if (laravel == 'beginer') {
        document.getElementById('Beginer_3').checked = true;
      }
      if (laravel == 'mideator') {
        document.getElementById('Mideator_3').checked = true;
      }
      if (laravel == 'expert') {
        document.getElementById('Expert_3').checked = true;
      }
    }

    if (oracle) {
      document.getElementById('technology_name_4').checked = true;
      if (oracle == 'beginer') {
        document.getElementById('Beginer_4').checked = true;
      }
      if (oracle == 'mideator') {
        document.getElementById('Mideator_4').checked = true;
      }
      if (oracle == 'expert') {
        document.getElementById('Expert_4').checked = true;
      }
    }


    // ====== REFERENCE CONTACT =======

    document.getElementById('reference_id_1').value = all_data.data4[0].reference_id;
    document.getElementById('ref_name_1').value = all_data.data4[0].ref_name;
    document.getElementById('ref_phone_no_1').value = all_data.data4[0].ref_phone_no;
    document.getElementById('ref_relation_1').value = all_data.data4[0].ref_relation;

    if (all_data.data4[1]) {
      document.getElementById('reference_id_2').value = all_data.data4[1].reference_id;
      document.getElementById('ref_name_2').value = all_data.data4[1].ref_name;
      document.getElementById('ref_phone_no_2').value = all_data.data4[1].ref_phone_no;
      document.getElementById('ref_relation_2').value = all_data.data4[1].ref_relation;
    }


    // PREFERENCES 


    let location = document.getElementById('location');
    for (let i = 0; i < location.length; i++) {
      if ((location[i].value == all_data.data5[0].location_1) || (location[i].value == all_data.data5[0].location_2) || (location[i].value == all_data.data5[0].location_3)) {
        location[i].selected = true;
      }
    }

    document.getElementById('preference_id').value = all_data.data5[0].preference_id;
    document.getElementById('notice_period_in_month').value = all_data.data5[0].notice_period_in_month;
    document.getElementById('expected_ctc').value = all_data.data5[0].expected_ctc;
    document.getElementById('current_ctc').value = all_data.data5[0].current_ctc;

    let department = document.getElementById('department');
    for (let i = 0; i < department.length; i++) {
      if (department[i].value == all_data.data5[0].department) {
        department[i].selected = true;
      }
    }
  } catch (e) { console.log(e); }
}
