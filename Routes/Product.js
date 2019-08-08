const express = require('express');
const router = express.Router();

const ProductsController = require('../API/Controllers/Http/ProductsController');

router.get('/', (req, res, next) => {
    console.log('- get all product');    
    ProductsController.getAllProduct({ req, res, next })
})

module.exports = router;
