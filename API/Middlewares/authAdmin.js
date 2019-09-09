const jwt = require('jsonwebtoken');
const AdminModel = require('../Models/AdminModel');
require('dotenv').config();
global.Env = process.env;

class AuthAdmin{
    constructor(){
        this.adminModel = AdminModel;
    }
    async auth({req, res, next}){
        const { headers } = req;
        const token = headers.authorization;
        if(!token)
        {
            return res.json({
                message: 'no_token',
                data: null
            });
        }
        try {
            const info_verify = await jwt.verify(token, Env.JWT_KEY);
            const admin = await this.adminModel.findById(info_verify.id);
            if (!admin) {
                return res.json({
                    err: "err"
                })
            }
            if(admin.tokens.filter(t => t === token).length === 0) {
                return res.json({
                    message: 'ko tim thay token, admin da dang xuat'
                })
            }
            req.admin = admin;
            next();
        } catch (err) {
            return res.json({ err: "token fail" });
        }
    }
}


module.exports = new AuthAdmin();