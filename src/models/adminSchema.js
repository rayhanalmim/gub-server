const { Schema, model } = require('mongoose');

const AdminCollections = model('admin', new Schema({}, { strict: false }));

module.exports=AdminCollections;