
async function state() {
  try {
    let response = await fetch(`http://localhost:9027/city_state_dropdown/state`);
    let all_state = await response.json();

    let select = document.getElementById('state');

    for (let i = 0; i < all_state.length; i++) {
      let state = all_state[i].state;
      let opt = document.createElement('option');
      opt.textContent = state;
      opt.value = state;
      select.appendChild(opt);
    }
  } catch (e) { console.log(e); }
}



async function city() {
  try {
    let state = document.getElementById('state').value;
    let response = await fetch(`http://localhost:9027/city_state_dropdown/city?state=${state}`);
    let all_city = await response.json();

    let select = document.getElementById('city');
    select.innerHTML = ""

    for (let i = 0; i < all_city.length; i++) {
      let city = all_city[i].city;
      let opt = document.createElement('option');
      opt.textContent = city;
      opt.value = city;
      select.appendChild(opt);
    }
  } catch (e) { console.log(e); }
}
