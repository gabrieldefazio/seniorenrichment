'use strict'
const api = require('express').Router()
const db = require('../db')


api.use('/campus', require('./api/campus'));
api.use('/students', require('./api/student'));

// Make sure this is after all of
// the registered api!
api.use(function (req, res) {
  res.status(404).end();
});

module.exports = api;