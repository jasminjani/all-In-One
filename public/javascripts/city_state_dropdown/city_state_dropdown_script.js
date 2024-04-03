
async function state() {
    let response = await fetch("http://localhost:9027/city_state_dropdown/state");
    let all_state = await response.json();

    let select = document.getElementById('state');

    for (var i = 0; i < all_state.length; i++) {
        var state = all_state[i].state;
        var opt = document.createElement('option');
        opt.textContent = state;
        opt.value = state;
        select.appendChild(opt);
    }
}



async function city() {
    let state = document.getElementById('state').value;
    let response = await fetch(`http://localhost:9027/city_state_dropdown/city?state=${state}`);
    let all_city = await response.json();

    let select = document.getElementById('city');
    select.innerHTML = ""

    for (let i = 0; i < all_city.length; i++) {
        var city = all_city[i].city;
        var opt = document.createElement('option');
        opt.textContent = city;
        opt.value = city;
        select.appendChild(opt);
    }
}
