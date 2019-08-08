const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// mongoose.Promise = global.Promise;

const Products = new Schema({
    name:      { type: String, required: true },
    image:     [
        { type: String, required: true }
    ],
    overview: { type: String, required: true },
    category:  { type: String, required: true },
    describe:  { type: String, required: true },
    price:     { type: Number, required: true },
    stock:     { type: Number, required: true }
});

module.exports = mongoose.model('Products', Products);
