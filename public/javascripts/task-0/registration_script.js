
async function fetch_data() {

    try {

        document.getElementById('container').style.height = "400px";
        document.getElementById('activation').style.display = "inline";
        if (validation() == false) { return false }

        const form = document.getElementById('form');
        const obj = new URLSearchParams(new FormData(form));

        let url = "http://localhost:9027/post"

        // console.log(url);
        let res1 = await fetch(url,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: "POST",
                body: obj
            })

        res1 = await res1.json();

        console.log(res1);
        var activation = await res1.activation;

        if (res1.a) {
            document.getElementById('email_validation').innerHTML = res1.a;
        }
        else if (res1.b) {
            document.getElementById('already_user').style.display = "none"
            document.getElementById('activation').innerHTML = `<span>User is already registered but does not activated link. Click below link for activate. </span><a href="http://localhost:9027/password/${res1.activation}">http://localhost:9027/password/${res1.activation}</a>`;
        }
        else {
            document.getElementById('already_user').style.display = "none"
            document.getElementById('activation').innerHTML = `<span>Thank you for Registration. Click below link for activate. </span><a href="http://localhost:9027/password/${res1.activation}">http://localhost:9027/password/${res1.activation}</a>`;
        }

    } catch (e) { console.log(e); }
}




function validation() {
    let err = [];

    err.push(name_validation('first_name', 'first_name_validation'));
    err.push(name_validation('last_name', 'last_name_validation'));
    err.push(email_validation_with_regex('email', 'email_validation'));
    err.push(phone_no_validation_with_regex('phone_no', 'phone_no_validation'));

    if (err.includes(false)) {
        return false;
    }
}


// ====== NAME VALIDATION ========

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


// ========= PHONE NO. VALIDATION ========

function phone_no_validation_with_regex(input_id, validation_id) {

    let phone_no = document.getElementById(input_id).value.trim();
    let phone_no_regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;

    if (!phone_no.match(phone_no_regex)) {
        document.getElementById(validation_id).textContent = "phone no must be 10 digit number";
        return false;
    }
    return true;
}


// ========== EMAIL VALIDATION ======

function email_validation_with_regex(input_id, validation_id) {

    let email = document.getElementById(input_id).value.trim();
    let email_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!email.match(email_format)) {
        document.getElementById(validation_id).textContent = "Enter valid format of email";
        return false;
    }
    return true;
}
