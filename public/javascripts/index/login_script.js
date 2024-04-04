
let forgot_password_btn = document.getElementById('forgot_password');

forgot_password_btn.addEventListener('keyup', function (event) {
  try {
    if (event.key === 'Enter') {
      forgot_password();
    }
  } catch (e) { console.log(e); }
});

async function forgot_password() {

  try {

    document.getElementById('container').style.height = "270px";

    if (email_validation_with_regex('email', 'email_validation') == false) {
      return false;
    }

    const form = document.getElementById('form');
    const obj = new URLSearchParams(new FormData(form));

    let url = `http://localhost:9027/forgot`;

    let res1 = await fetch(url,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "POST",
        body: obj
      });

    res1 = await res1.json();

    if (res1.data) {
      if (res1.data[0].email == document.getElementById('email').value) {
        let activation = await res1.data[0].activation_code;

        window.location.href = `http://localhost:9027/forgot_password/${activation}`;
      }
    }
    else {
      // document.getElementById('email_validation').innerHTML = res1.a;
      document.getElementById('email_validation').innerHTML = "Invalid Credential";
    }

  } catch (e) { console.log(e); }

}

let login_btn = document.getElementById('login');

login_btn.addEventListener('keyup', function (event) {
  try {
    if (event.key === 'Enter') {
      login();
    }
  } catch (e) { console.log(e); }
});


async function login() {

  try {

    document.getElementById('container').style.height = "270px";

    if (email_validation_with_regex('email', 'email_validation') == false) {
      return false;
    }

    const form = document.getElementById('form');
    const obj = new URLSearchParams(new FormData(form));

    let url = `http://localhost:9027/loginpage`;

    let res1 = await fetch(url,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: "POST",
        body: obj
      });

    res1 = await res1.json();

    if (res1.data) {
      if (res1.data[0].email == document.getElementById('email').value) {

        window.location.href = `http://localhost:9027/dashboard`;

        // document.getElementById('email_validation').innerHTML = "valid Credential"
        // document.getElementById('email_validation').style.color = "green"
      }
      else {
        document.getElementById('email_validation').innerHTML = "Invalid Credential"
        document.getElementById('email_validation').style.color = "red"
      }
    }
    else {
      document.getElementById('email_validation').innerHTML = "Invalid Credential"
      document.getElementById('email_validation').style.color = "red"
    }

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
