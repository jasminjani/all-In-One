var express = require('express');
var task_1 = express.Router();
var isAuthorization = require('../middleware/isAuthorization')



task_1.get('/task_1', isAuthorization, (req, res) => {
    res.render('./task-1/task-1');
});


module.exports = task_1;
