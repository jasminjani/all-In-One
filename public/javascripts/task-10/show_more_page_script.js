
let url = window.location.href;
let id = url.split("/").pop();
console.log(id);

async function details() {

    let jash = await fetch(`https://jsonplaceholder.org/posts/${id}`)
        .then(response => response.json());

    let table = document.getElementById('tbody');

    let html = `
     <tr>
        <td>id</td> 
        <td>${jash.id}</td> 
    </tr>
    <tr>
        <td>slug</td>
        <td>${jash.slug}</td>
    </tr>
    <tr>
        <td>url</td>
        <td>${jash.url}</td>
    </tr>
    <tr>
        <td>title</td>
        <td>${jash.title}</td>
    </tr>
    <tr>
        <td>content</td>
        <td>${jash.content}</td>
    </tr>
    <tr>
        <td>image</td>
        <td><img src="${jash.image}" alt=""></td>
    </tr>
    <tr>
        <td>thumbnail</td>
        <td><img src="${jash.thumbnail}" alt=""></td>
    </tr>
    <tr>
        <td>status</td>
        <td>${jash.status}</td>
    </tr>
    <tr>
        <td>category</td>
        <td>${jash.category}</td>
    </tr>
    <tr>
        <td>publishedAt</td>
        <td>${jash.publishedAt}</td>
    </tr>
    <tr>
        <td>updatedAt</td>
        <td>${jash.updatedAt}</td>
    </tr>
    <tr>
        <td>userId</td>
        <td>${jash.userId}</td>
    </tr>
    <tr>
        <td> <button id="btn_comment" onclick="show_comments()"> show comments </button> </td>
        <td id="show_comment" style="visibility: hidden;"></td>
    </tr>`;

    // console.log(html);

    table.innerHTML = html;




}


details();



async function show_comments() {

    document.getElementById('show_comment').style.visibility = 'visible';

    let commentAPI = await fetch('https://jsonplaceholder.org/comments')
    commentAPI = await commentAPI.json()

    // console.log(commentAPI);
    let comment_arr = [];

    commentAPI.forEach((item) => {
        // console.log(item.postId);
        // console.log(item.comment);

        if (id == item.postId) {
            comment_arr.push(item.comment)
        }
    });

    // console.log(comment_arr);


    if (comment_arr.length <= 0) {
        document.getElementById('show_comment').innerHTML = "No comments";
    }
    else {

        document.getElementById('show_comment').innerHTML = ""

        const ul = document.createElement("ul");

        comment_arr.forEach((element) => {
            // console.log(element);
            let li = document.createElement("li");
            li.innerHTML = element;
            ul.appendChild(li);
        });

        document.getElementById('show_comment').appendChild(ul);

    }

};


