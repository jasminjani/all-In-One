

function timezone_based_time() {

    let date = new Date();
    document.getElementById('time_input').value = date.toLocaleString('en-US', 'Asia/Kolkata');
    let city_timezone = document.getElementById('city_timezone').value
    let options = { timeZone: city_timezone };
    let eastCoastTime = date.toLocaleString('en-US', options);
    document.getElementById('time_output').innerHTML = eastCoastTime;

}

function convert_time() {

    let a = document.getElementById('time_input').value
    let date = new Date(a);
    document.getElementById('time_input').value = date.toLocaleString('en-US', 'Asia/Kolkata');
    let city_timezone = document.getElementById('city_timezone').value
    let options = { timeZone: city_timezone };
    let eastCoastTime = date.toLocaleString('en-US', options);
    document.getElementById('time_output').innerHTML = eastCoastTime;

}


async function country() {
    let response = await fetch("http://localhost:9027/task_16/country");
    let all_country = await response.json();
    // console.log(all_country[0].country);

    let select = document.getElementById('country');

    for (var i = 0; i < all_country.length; i++) {
        var country = all_country[i].country;
        var opt = document.createElement('option');
        opt.textContent = country;
        opt.value = country;
        select.appendChild(opt);
    }
}



async function city_timezone() {
    let country = document.getElementById('country').value;
    let response = await fetch(`http://localhost:9027/task_16/city?country=${country}`);
    let all_city = await response.json();
    // console.log(all_city[0].timezone);

    let select = document.getElementById('city_timezone');
    select.innerHTML = ""
    var opt = document.createElement('option');
    opt.textContent = "select city timezone";
    opt.value = "";
    select.appendChild(opt);


    for (let i = 0; i < all_city.length; i++) {
        var city = all_city[i].timezone;
        var opt = document.createElement('option');
        opt.textContent = city;
        opt.value = city;
        select.appendChild(opt);
    }
}
