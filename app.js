const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('dotenv').config()
const router = require('./routes/router');
const port = process.env.port;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cookieParser())

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(router);


app.listen(port, (err) => {
    if (!err) {
        console.log("server start at port ", port, `URL is : http://localhost:${port}`);
    }
    else {
        console.log("Error occurred, can not start server", err);
    }
});