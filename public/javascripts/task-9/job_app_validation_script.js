
function form_validation() {

    let err = [];

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

    err.push(dropdown_validation('board_or_university_1', 'select_ssc', 'board_or_university_1_validation'));
    err.push(year_validation_with_regex('passing_year_1', 'passing_year_1_validation'));
    err.push(percentage_validation_with_regex('percentage_1', 'percentage_1_validation'));
    err.push(dropdown_validation('board_or_university_2', 'select_hsc', 'board_or_university_2_validation'));
    err.push(year_validation_with_regex('passing_year_2', 'passing_year_2_validation'));
    err.push(percentage_validation_with_regex('percentage_2', 'percentage_2_validation'));
    // err.push(not_null_validation ('course_name_3','course_name_3_validation'));
    err.push(dropdown_validation('board_or_university_3', 'select_bachlor', 'board_or_university_3_validation'));
    err.push(year_validation_with_regex('passing_year_3', 'passing_year_3_validation'));
    err.push(percentage_validation_with_regex('percentage_3', 'percentage_3_validation'));
    // err.push(not_null_validation ('course_name_4','course_name_4_validation'));

    if ((!(document.getElementById('board_or_university_4').value == "select_master")) ||
        (!(document.getElementById('passing_year_4').value.trim() == null || document.getElementById('passing_year_4').value.trim() == "")) ||
        (!(document.getElementById('percentage_4').value.trim() == null || document.getElementById('percentage_4').value.trim() == ""))) {

        err.push(dropdown_validation('board_or_university_4', 'select_master', 'board_or_university_4_validation'));
        err.push(year_validation_with_regex('passing_year_4', 'passing_year_4_validation'));
        err.push(percentage_validation_with_regex('percentage_4', 'percentage_4_validation'));
    }


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

    err.push(number_validation('notice_period_in_month', 'notice_period_in_month_validation'));
    err.push(number_validation('expected_ctc', 'expected_ctc_validation'));
    err.push(number_validation('current_ctc', 'current_ctc_validation'));
    err.push(dropdown_validation('department', 'select_department', 'department_validation'));



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




    if (err.includes(false)) {
        return false;
    }


    return true;
}


function name_validation(input_id, validation_id) { // where input_id is id of input field and validation_id is id of validation field

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
}


function phone_no_validation_with_regex(input_id, validation_id) {

    let phone_no = document.getElementById(input_id).value.trim();
    let phone_no_regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    if (!phone_no.match(phone_no_regex)) {
        document.getElementById(validation_id).textContent = "phone no must be 10 digit number";
        return false;
    }
    return true;
}


function email_validation_with_regex(input_id, validation_id) {

    let email = document.getElementById(input_id).value.trim();
    let email_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email.match(email_format)) {
        document.getElementById(validation_id).textContent = "Enter valid format of email";
        return false;
    }
    return true;
}


function gender_validation(male_id, female_id, validation_id) {

    let male = document.getElementById(male_id);
    let female = document.getElementById(female_id);

    if (!(male.checked || female.checked)) {
        document.getElementById(validation_id).textContent = "any gender is not checked";
        return false;
    }
    return true;

}


function number_validation(input_id, validation_id) {

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
};


function not_null_validation(input_id, validation_id) {

    let str = document.getElementById(input_id).value.trim();
    let x_replace = input_id.replace("_", " ");

    if (str == null || str == "") {
        document.getElementById(validation_id).textContent = x_replace + " can not be null";
        return false;
    }

    return true;
}


function zipcode_validation(input_id, validation_id) {

    let zipcode = document.getElementById(input_id).value.trim();
    let zipcode_regex = /^\(?(\d{3})\)?[- ]?(\d{3})$/;

    if (!zipcode.match(zipcode_regex)) {
        document.getElementById(validation_id).textContent = "zipcode must be 6 digit number";
        return false;
    }
    return true;
}


function date_validation_with_regex(input_id, validation_id) {

    let date = document.getElementById(input_id).value.trim();
    let date_regex = /^\d{4}[./-]\d{2}[./-]\d{2}$/;

    if (!date.match(date_regex)) {
        document.getElementById(validation_id).textContent = "formate must be yyyy-mm-dd";
        return false;
    }
    return true;
}

function year_validation_with_regex(input_id, validation_id) {

    let year = document.getElementById(input_id).value.trim();
    let year_regex = /^\d{4}$/;

    if (!year.match(year_regex)) {
        document.getElementById(validation_id).textContent = "formate must be yyyy";
        return false;
    }
    return true;
}

function percentage_validation_with_regex(input_id, validation_id) {

    let percentage = document.getElementById(input_id).value.trim();
    let percentage_regex = /^(100(\.0{1,2})?|([0-9]?[0-9](\.[0-9]{1,2})))$/;

    if (!percentage.match(percentage_regex)) {
        document.getElementById(validation_id).textContent = "formate must be like 00.00";
        return false;
    }
    return true;
}

function dropdown_validation(input_id, value, validation_id,) { // value is first option tag value

    var select = document.getElementById(input_id);
    var optionSelIndex = select.options[select.selectedIndex].value;
    // var optionSelectedText = select.options[select.selectedIndex].text;
    if (optionSelIndex == value) {
        document.getElementById(validation_id).textContent = "choose value from dropdown"
        return false;
    }
    return true;
}

function add_work_exp() {

    var mytable = document.getElementById('work_exp_table');
    var rows = mytable.rows.length;  
    var r = mytable.insertRow(rows);  
    var c1 = r.insertCell(0);  
    var c2 = r.insertCell(1);  
    var c3 = r.insertCell(2);  
    var c4 = r.insertCell(3);  
    var c5 = r.insertCell(4);  
    var c6 = r.insertCell(5);  
    var c7 = r.insertCell(6);  
    var c8 = r.insertCell(7);  

    var company_label = document.createElement("label");  
    var company_name = document.createElement("input");  
    var designation_label = document.createElement("label");  
    var past_designation = document.createElement("input");  
    var from_label = document.createElement("label");  
    var start_date = document.createElement("input");  
    var to_label = document.createElement("label");  
    var end_date = document.createElement("input");  

    company_label.innerHTML = "Company name";  
    company_name.type = "text";  
    company_name.name = "company_name";  
    designation_label.innerHTML = "Designation";
    past_designation.type = "text";
    past_designation.name = "past_designation";
    from_label.innerHTML = "From";
    start_date.type = "text";
    start_date.name = "start_date";
    to_label.innerHTML = "To";
    end_date.type = "text";
    end_date.name = "end_date";

    c1.appendChild(company_label);  
    c2.appendChild(company_name);  
    c3.appendChild(designation_label);  
    c4.appendChild(past_designation);  
    c5.appendChild(from_label);  
    c6.appendChild(start_date);  
    c7.appendChild(to_label);  
    c8.appendChild(end_date);  

}

function remove_work_exp() {

    var mytable = document.getElementById('work_exp_table');
    var rows = mytable.rows.length;  
    if (rows > 3) {
        mytable.deleteRow(rows - 1);  
    }

}
