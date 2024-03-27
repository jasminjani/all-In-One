const express = require("express");
var task_3 = express.Router();


task_3.get('/task_3', (req, res) => {
    res.render("./task-3/task-3");
});

module.exports =  task_3;
