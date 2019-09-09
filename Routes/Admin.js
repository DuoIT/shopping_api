const express = require('express');
const router = express.Router();

const authAdminMiddleware = require('../API/Middlewares/authAdmin');
const productController = require('../API/Controllers/Http/ProductsController');

router.use(function(req, res, next){
    authAdminMiddleware.auth({req, res, next});
});
//getProduct
router.get('/getProduct', (req, res, next)=>{
    productController.getAllProduct({req, res, next});
});
//postProduct
router.post('/postProduct',(req, res, next)=>{
    productController.postProduct({req, res, next});
});
//updateProduct
router.put('/updateProduct', (req, res, next)=>{
    productController.updateProduct({req, res, next});
});
//postCategory
router.post('/postCate',(req, res, next)=>{
    productController.postCate({req, res, next});
});
//updateCategory
router.put('/updateCate', (req, res, next)=>{
    productController.updateCate({req, res, next});
});

module.exports = router;