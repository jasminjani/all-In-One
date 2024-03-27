var express = require('express');
var task_1 = express.Router();



task_1.get('/task_1', (req, res) => {
    res.render('./task-1/task-1');
});


module.exports = task_1;
