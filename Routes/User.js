const express = require('express');
const router = express.Router();

const authMiddleware = require('../API/Middlewares/authMiddleware');
const userController = require('../API/Controllers/User/UserController');
const ProductsController = require('../API/Controllers/Http/ProductsController');


//getProduct
router.get('/getProduct', (req, res, next)=>{
    ProductsController.getAllProduct({req, res, next});
});
//getCate
router.get('/getCate', (req, res, next)=>{
    ProductsController.getCate({req, res, next});
});
//getDetailProduct
router.get('/ProductId',(req, res, next)=>{
    ProductsController.getDetailProdutc({req, res, next});
});
//getProduct-by-cate
router.get('/CateProduct', (req, res, next)=>{
    ProductsController.getProductbyCate({req, res, next});
});

router.use(function(req, res, next){
    authMiddleware.auth({req, res, next});
})
//getProfile
router.get('/profile', (req, res, next)=>{
    userController.getProfile({req, res, next});
})
//updateProfile
router.put('/updateProfile', (req, res, next)=>{
    userController.updateProfile({req, res, next});
})
//addToCart
router.post('/addCart', (req, res, next)=>{
    ProductsController.addToCart({req, res, next});
})


module.exports = router;