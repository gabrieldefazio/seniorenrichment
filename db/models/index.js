const Student = require('./Student');
const Campus = require('./Campus');

Student.belongsTo(Campus)

module.exports = { Campus, Student };
