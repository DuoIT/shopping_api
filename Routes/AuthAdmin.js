const express = require('express');
const router = express.Router();

//admin
const authAdminMiddleware = require('../API/Middlewares/authAdmin');
const AdminController = require('../API/Controllers/Http/AuthAdminController');

router.post('/register', (req, res, next)=>{
    AdminController.register({req, res, next});
})

router.post('/login', (req, res, next)=>{
    AdminController.login({req, res, next});
});

router.use((req, res, next)=>{
    authAdminMiddleware.auth({req, res, next});
});

router.post('/logout',(req, res, next)=>{
    AdminController.logout({req, res, next});
});

module.exports = router;