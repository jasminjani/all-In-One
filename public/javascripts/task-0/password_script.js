
async function verify_pass() {

    let password = document.getElementById('password').value;
    let verify_password = document.getElementById('verify_password').value;

    if (!(password == verify_password)) {
        document.getElementById('error_password').innerHTML = "password does not match";
    }
    else if (password == verify_password) {

        const form = document.getElementById('form');
        const obj = new URLSearchParams(new FormData(form));

        let activation = window.location.href.split('/').pop();
        let url = `http://localhost:9027/password/${activation}`

        // console.log(url);
        let res1 = await fetch(url,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: "POST",
                body: obj
            });
            res1 = await res1.json();


        document.getElementById('login').style.display = "inline";
        document.getElementById('login').innerHTML = `<a href="http://localhost:9027/login">Go to Login page</a>`;
        document.getElementById('submit').style.display = "none";
    }
}