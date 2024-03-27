const express = require("express");
var task_4 = express.Router();


task_4.get('/task_4', (req, res) => {
    res.render("./task-4/task-4");
});

module.exports =  task_4;
