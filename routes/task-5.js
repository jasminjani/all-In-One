const express = require("express");
var task_5 = express.Router();
var isAuthorization = require('../middleware/isAuthorization');


task_5.get('/task_5', isAuthorization, (req, res) => {
    res.render("./task-5/task-5");
});

module.exports =  task_5;
