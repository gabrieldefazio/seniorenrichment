'use strict';
const Sequelize = require('sequelize');
var db = require('../')

const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  campusId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Student

