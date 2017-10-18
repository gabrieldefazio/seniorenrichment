const Student = require('./student');
const Campus = require('./campus');

Student.belongsTo(Campus)

module.exports = { Campus, Student };
