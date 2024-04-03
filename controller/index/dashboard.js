const express = require('express');
const randomize = require('randomatic');
const mysql = require('mysql');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const con = require('../../database_connection');

// ======== DASHBOARD ===========

let dashboard = (req, res) => {
  res.render("./index/dashboard")
};

// ======== LOGOUT FROM DASHBOARD ========

let logout = (req, res) => {
  delete req.body.email;
  res.clearCookie("token").redirect('/login');
};

module.exports = { dashboard, logout }