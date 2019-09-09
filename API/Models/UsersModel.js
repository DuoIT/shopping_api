const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();
global.Env = process.env;

//const Schema = mongoose.Schema;
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7
    },
    email: {
        type: String,
        required: true,
        // unique: true,
        // lowercase: true,
        // validate: value => {
        //     if (!validator.isEmail(value)) {
        //         throw new Error({ error: 'Invalid Email Address ' });
        //     }
        // }
    },
    phone: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    dateCreate: {
        type: Date,
        required: true
    },
    // tokens: [{
    //     token: {
    //             type: String,
    //             require: true
    //     }
    // }]
    tokens: Array
});

const User = mongoose.model('User', userSchema);

module.exports = User;
