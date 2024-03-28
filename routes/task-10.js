const express = require('express');
const isAuthorization = require('../middleware/isAuthorization');
var task_10 = express.Router();



task_10.get('/task_10', isAuthorization, (req, res) => {

    res.render('./task-10/task-10');

});


task_10.get('/task_10/posts/:id', isAuthorization, (req, res) => {

    res.render('./task-10/show_more')

});

module.exports = task_10;