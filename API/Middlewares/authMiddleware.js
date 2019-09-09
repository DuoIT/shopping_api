const jwt = require('jsonwebtoken');
const UsersModel = require('../Models/UsersModel');
require('dotenv').config();
global.Env = process.env

class authMiddleware {
    constructor() {
        this.usersModel = UsersModel;
    }
    async auth({ req, res, next }) 
    {
        const { headers } = req;
        const token = headers.authorization;
        if (!token) {
            return res.json({
                message: 'no_token',
                data: null
            });
        }
        try {
            const info_verify = await jwt.verify(token, Env.JWT_KEY);
            const user = await this.usersModel.findById(info_verify.id);
            if (!user) {
                return res.json({
                    err: "err"
                })
            }
            if(user.tokens.filter(t => t === token).length === 0) {
                return res.json({
                    message: 'ko tim thay token, user da dang xuat'
                })
            }
            req.user = user;
            next();
        } catch (err) {
            return res.json({ err: "token fail" });
        }
    }
}

module.exports = new authMiddleware();