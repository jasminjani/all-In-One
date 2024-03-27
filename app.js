const express = require('express');
const mysql = require('mysql');
var path = require('path');
var randomize = require('randomatic');
const md5 = require('md5');
var jwt = require('jsonwebtoken');
const app = express();
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
const port = 9027;


const router = require('./routes');
const task_1 = require('./routes/task-1');
const task_2 = require('./routes/task-2');
const task_3 = require('./routes/task-3');
const task_4 = require('./routes/task-4');
const task_5 = require('./routes/task-5');
const task_6 = require('./routes/task-6');
const task_7 = require('./routes/task-7');
const task_8 = require('./routes/task-8');
const task_9 = require('./routes/task-9');
const task_10 = require('./routes/task-10');
const task_11 = require('./routes/task-11');
const task_12 = require('./routes/task-12');
const task_13 = require('./routes/task-13');
const task_14 = require('./routes/task-14');
const task_15 = require('./routes/task-15');
const task_16 = require('./routes/task-16');



app.use(bodyParser.urlencoded({ extended : false }));

app.use(bodyParser.json());

app.use(cookieParser())

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(router);
app.use(task_1);
app.use(task_2);
app.use(task_3);
app.use(task_4);
app.use(task_5);
app.use(task_6);
app.use(task_7);
app.use(task_8);
app.use(task_9);
app.use(task_10);
app.use(task_11);
app.use(task_12);
app.use(task_13);
app.use(task_14);
app.use(task_15);
app.use(task_16);


app.listen(port, (err) => {
    if (!err) {
        console.log("server start at port ", port, `URL is : http://localhost:${port}`);
    }
    else {
        console.log("Error occurred, can not start server", err);
    }
});