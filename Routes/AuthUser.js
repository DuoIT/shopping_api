const express = require('express');
const router = express.Router();

//user
const UserController = require('../API/Controllers/Http/AuthUserController');
const authMiddleware = require('../API/Middlewares/authMiddleware');


router.post('/register', (req, res, next)=>{
    UserController.register({req, res, next});
})

router.post('/login', (req, res, next)=>{
    UserController.login({req, res, next});
})

router.use((req, res, next)=>{
    authMiddleware.auth({req, res, next});
})

router.post('/logout',(req, res, next)=>{
    UserController.logout({req, res, next});
})


module.exports = router;