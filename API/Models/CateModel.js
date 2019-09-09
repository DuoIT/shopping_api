const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose.Promise = global.Promise;

const Cates = new Schema({
    name:      { type: String, required: true }
});

module.exports = mongoose.model('Cates', Cates);