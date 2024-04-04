

function index() {
  try {

    let month = document.getElementById('month').value;
    if ("<%= orderby %>" == "s_id asc") {
      window.location.href = `/attendance_and_result/attendance?page=1&month=${month}&orderby=s_id desc`;
    }
    else {
      window.location.href = `/attendance_and_result/attendance?page=1&month=${month}&orderby=s_id asc`;
    }
  } catch (e) { console.log(e); }
}


function first() {
  try {

    let month = document.getElementById('month').value;
    if ("<%= orderby %>" == "first_name asc") {
      window.location.href = `/attendance_and_result/attendance?page=1&month=${month}&orderby=first_name desc`;
    }
    else {
      window.location.href = `/attendance_and_result/attendance?page=1&month=${month}&orderby=first_name asc`;
    }
  } catch (e) { console.log(e); }
}


function last() {
  try {
    let month = document.getElementById('month').value;
    if ("<%= orderby %>" == "last_name asc") {
      window.location.href = `/attendance_and_result/attendance?page=1&month=${month}&orderby=last_name desc`;
    }
    else {
      window.location.href = `/attendance_and_result/attendance?page=1&month=${month}&orderby=last_name asc`;
    }
  } catch (e) { console.log(e); }
}


function present() {
  try {
    let month = document.getElementById('month').value;
    if ("<%= orderby %>" == "present asc") {
      window.location.href = `/attendance_and_result/attendance?page=1&month=${month}&orderby=present desc`;
    }
    else {
      window.location.href = `/attendance_and_result/attendance?page=1&month=${month}&orderby=present asc`;
    }
  } catch (e) { console.log(e); }
}


function percentage() {
  try {
    let month = document.getElementById('month').value;
    if ("<%= orderby %>" == "percentage asc") {
      window.location.href = `/attendance_and_result/attendance?page=1&month=${month}&orderby=percentage desc`;
    }
    else {
      window.location.href = `/attendance_and_result/attendance?page=1&month=${month}&orderby=percentage asc`;
    }
  } catch (e) { console.log(e); }
}


function changed() {
  try {
    let month = document.getElementById('month').value;
    window.location.href = `/attendance_and_result/attendance?page=1&month=${month}&orderby=s_id asc`;
  } catch (e) { console.log(e); }
}


function legend(orderby) {
  try {
    let month = document.getElementById('month').value;
    window.location.href = `/attendance_and_result/attendance?page=1&month=${month}&orderby=${orderby}`;
  } catch (e) { console.log(e); }
}
