const express = require("express");
var task_2 = express.Router();


task_2.get('/task_2', (req, res) => {
    res.render("./task-2/task-2");
});

module.exports =  task_2;
