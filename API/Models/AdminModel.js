const mongoose = require('mongoose');

require('dotenv').config();
global.Env = process.env;

const Schema = mongoose.Schema;
const Admins = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7
    },
    tokens: Array
});


const Admin = mongoose.model('Admins', Admins);

module.exports = Admin;