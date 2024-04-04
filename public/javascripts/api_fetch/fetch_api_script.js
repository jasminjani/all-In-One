
let slice_start = 0;
let slice_end = 10;
let page = 1;
let total_record = 100;
let pagesize = slice_end;
let last = Math.ceil(total_record / pagesize);
let url;


if (page == 1) {
  document.getElementById('btn2').style.visibility = "hidden";
}


async function apifetch() {
  try {

    url = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());

    slice_func(slice_start, slice_end, page);
  } catch (e) { console.log(e); }
};


apifetch();

function slice_func(slice_start, slice_end, page) {
  try {

    let somedata = url.slice(slice_start, slice_end);


    let html = ` <tr id="tr">
        <th id="userId">userId</th>
        <th id="id">id</th>
        <th id="title">title</th>
        <th id="body">show details</th>
        </tr>`;

    document.getElementById('tbody').innerHTML = html;
    document.getElementById('span').innerHTML = page;

    somedata.forEach((item) => {

      html = ` <tr>
                        <td>${item.userId}</td>
                        <td>${item.id}</td>
                        <td>${item.title}</td>
                        <td><button onclick="window.location.href='/api_fetch/posts/${item.id}'">show more</button></td>
                </tr>`;

      document.getElementById('tbody').innerHTML = document.getElementById('tbody').innerHTML + html;
    });
  } catch (e) { console.log(e); }
}





function previous() {
  try {

    slice_start = slice_start - pagesize;
    slice_end = slice_end - pagesize;
    page = page - 1;
    if (page == 1) {
      document.getElementById('btn2').style.visibility = "hidden";
    }
    else {
      document.getElementById('btn2').style.visibility = "visible";
      document.getElementById('btn4').style.visibility = "visible";
    }
    slice_func(slice_start, slice_end, page);
  } catch (e) { console.log(e); }
}

function next() {
  try {

    slice_start = slice_start + pagesize;
    slice_end = slice_end + pagesize;
    page = page + 1;
    if (page == last) { document.getElementById('btn4').style.visibility = "hidden"; }
    else {
      document.getElementById('btn4').style.visibility = "visible";
      document.getElementById('btn2').style.visibility = "visible";
    }
    slice_func(slice_start, slice_end, page);
  } catch (e) { console.log(e); }
}
