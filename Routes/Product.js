const express = require('express');
const router = express.Router();

const ProductsController = require('../API/Controllers/Http/ProductsController');
const AuthMiddleware = require('../API/Middlewares/authMiddleware');
const AuthAdminMiddleware = require('../API/Middlewares/authAdmin');


// router.use(function(req, res, next){
//     AuthMiddleware.auth({req, res, next});
// });

// router.use(function(req, res, next){
//     AuthAdminMiddleware.auth({req, res, next});
// });

// //admin-user-getproduct
// // router.get('/', (req, res, next) => {
// //     console.log('- get all product');    
// //     ProductsController.getAllProduct({req, res, next});
// // });

// router.use(function(req, res, next){
//     AuthAdminMiddleware.auth({req, res, next});
// });

//post-product
// router.post('/postProduct', (req, res, next)=>{
//     console.log('--post product!!');
//     ProductsController.postProduct({req, res, next});
    
// })



module.exports = router;
