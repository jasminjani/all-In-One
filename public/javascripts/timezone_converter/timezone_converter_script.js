let converter_btn = document.getElementById('converter');

converter_btn.addEventListener('keyup', function (event) {
  try {
    if (event.key === 'Enter') {
      convert_time();
    }
  } catch (e) { console.log(e); }
});

function timezone_based_time() {
  try {

    let date = new Date();
    document.getElementById('time_input').value = date.toLocaleString('en-US', 'Asia/Kolkata');
    let city_timezone = document.getElementById('city_timezone').value
    let options = { timeZone: city_timezone };
    let eastCoastTime = date.toLocaleString('en-US', options);
    document.getElementById('time_output').innerHTML = eastCoastTime;

  } catch (e) { console.log(e); }
}

function convert_time() {
  try {

    let a = document.getElementById('time_input').value
    let date = new Date(a);
    document.getElementById('time_input').value = date.toLocaleString('en-US', 'Asia/Kolkata');
    let city_timezone = document.getElementById('city_timezone').value
    let options = { timeZone: city_timezone };
    let eastCoastTime = date.toLocaleString('en-US', options);
    document.getElementById('time_output').innerHTML = eastCoastTime;

  } catch (e) { console.log(e); }
}


async function country() {
  try {

    let response = await fetch("http://localhost:9027/timezone_converter/country");
    let all_country = await response.json();
    // console.log(all_country[0].country);

    let select = document.getElementById('country');

    for (let i = 0; i < all_country.length; i++) {
      let country = all_country[i].country;
      let opt = document.createElement('option');
      opt.textContent = country;
      opt.value = country;
      select.appendChild(opt);
    }
  } catch (e) { console.log(e); }
}



async function city_timezone() {
  try {

    let country = document.getElementById('country').value;
    let response = await fetch(`http://localhost:9027/timezone_converter/city?country=${country}`);
    let all_city = await response.json();
    // console.log(all_city[0].timezone);

    let select = document.getElementById('city_timezone');
    select.innerHTML = ""
    let opt = document.createElement('option');
    opt.textContent = "select city timezone";
    opt.value = "";
    select.appendChild(opt);


    for (let i = 0; i < all_city.length; i++) {
      let city = all_city[i].timezone;
      let opt = document.createElement('option');
      opt.textContent = city;
      opt.value = city;
      select.appendChild(opt);
    }
  } catch (e) { console.log(e); }
}
