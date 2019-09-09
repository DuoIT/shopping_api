const mongoose = require('mongoose');

require('dotenv').config();
global.Env = process.env;

const Schema = mongoose.Schema;
const Carts = new Schema({
    userId: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        required: true,
    },
    name:{
        type:String,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    cate:{
        type: String,
        required: true
    },
    des:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    qty:{
        type: String,
        required: true
    }
});


const Cart = mongoose.model('Casts', Carts);

module.exports = Cart;