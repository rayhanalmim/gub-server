const { Schema, model } = require('mongoose');

const StudentCollections = model('Students', new Schema({}, { strict: false }));

module.exports=StudentCollections;