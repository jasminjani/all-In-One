
let url = window.location.href;
let id = url.split("/").pop();

async function details() {
  try {

    let jash = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json());

    let table = document.getElementById('tbody');

    let html = `

    <tr>
        <td>slug</td>
        <td>${jash.userId}</td>
    </tr>

    <tr>
        <td>id</td> 
        <td>${jash.id}</td> 
    </tr>

    <tr>
        <td>title</td>
        <td>${jash.title}</td>
    </tr>

    <tr>
        <td>userId</td>
        <td>${jash.body}</td>
    </tr>
    <tr>
        <td> <button id="btn_comment" onclick="show_comments()"> show comments </button> </td>
        <td id="show_comment" style="visibility: hidden;"></td>
    </tr>`;

    table.innerHTML = html;

  } catch (e) { console.log(e); }
}


details();



async function show_comments() {
  try {

    document.getElementById('show_comment').style.visibility = 'visible';

    let commentAPI = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    commentAPI = await commentAPI.json()

    let comment_arr = [];

    commentAPI.forEach((item) => {

      if (id == item.postId) {
        comment_arr.push(item)
      }
    });


    if (comment_arr.length <= 0) {
      document.getElementById('show_comment').innerHTML = "No comments";
    }
    else {

      document.getElementById('show_comment').innerHTML = ""

      const table = document.createElement("table");

      let tr = document.createElement("tr");

      let td = document.createElement("th");
      td.innerHTML = "id";
      tr.appendChild(td);

      let td2 = document.createElement("th");
      td2.innerHTML = "name";
      tr.appendChild(td2);

      let td3 = document.createElement("th");
      td3.innerHTML = "email";
      tr.appendChild(td3);

      let td4 = document.createElement("th");
      td4.innerHTML = "body";
      tr.appendChild(td4);

      table.appendChild(tr);


      comment_arr.forEach(element => {

        const tr = document.createElement("tr");

        let td = document.createElement("td");
        td.innerHTML = element.id;
        tr.appendChild(td);

        let td2 = document.createElement("td");
        td2.innerHTML = element.name;
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.innerHTML = element.email;
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.innerHTML = element.body;
        tr.appendChild(td4);

        table.appendChild(tr);

      });

      document.getElementById('show_comment').appendChild(table);

    }
  } catch (e) { console.log(e); }
};
