const express = require("express");
var task_5 = express.Router();


task_5.get('/task_5', (req, res) => {
    res.render("./task-5/task-5");
});

module.exports =  task_5;
