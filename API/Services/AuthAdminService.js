const AdminsModel = require('../Models/AdminModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AdminService{
    constructor(){
        this.AdminsModel = AdminsModel;
    }
    //register - Admin
    async register(body){
        const name = body.name;
        const password = body.password;
        if(!body.name ||!body.password){
            return{
                message:'name_or_password_is_require!!!'
            }
        }
        const admin = await this.AdminsModel.findOne({ 'name': name }).exec();
        //console.log(admin);
        //admin
        if (admin) {
            return {
                success: false,
                message: 'admin_is_exits',
                result: null
            }
        }
        const salt = await bcrypt.genSaltSync(10);
        const passwordHash = await bcrypt.hashSync(body.password, salt);

        const newAdmin = new this.AdminsModel({
                name: body.name,
                password: passwordHash,
                dateCreate: Date.now()
            });
        const NewAdmin = await newAdmin.save()
        //console.log(NewAdmin);
            let token = await jwt.sign({
                id: NewAdmin._id
            }, Env.JWT_KEY)
            console.log(token);
        try{ 
            const success = await this.AdminsModel.findOne().where('name').in(NewAdmin.name).exec();
            //console.log(success);
            success.tokens = [token];
            success.save();
            return{
                success: true,
                message:'Register_admin_success!!',
                result:{
                    name: NewAdmin.name,
                    token
                }
            }
        }catch(error){
            return{
                success: false,
                message: 'Register_admin_fail',
                result: null
            }
        }
    }

    //login - admin
    async login(body){
        const name = body.name;
        const password = body.password;
        if(!body.name || !body.password){
            return{
                success: false,
                message: 'Name_or_password_is_require!!',
            }
        }

        const admin = await this.AdminsModel.findOne({'name': name }).exec(); 
        console.log(admin);
        if(!admin){
            return{
                success: false,
                message: 'Login fail',
                data: null
            }
        }
        const comparePassword = await bcrypt.compareSync(body.password, admin.password);
        if(!comparePassword){
            return{
                message: 'Password_is_wrong!',
                data: null
            }
        }
        let token = await jwt.sign({
            id: admin._id
        },Env.JWT_KEY);

        console.log(token);
        admin.tokens = [...admin.tokens, token];
        admin.save();
        return{
            success: true,
            message: 'Login success!!',
            data: {
                admin, token
            }
        }
        
    }
    //logout - admin
    async logout(headers){
        const token  = headers.authorization
        if(!token){
            return{
                success: false,
                message: 'Not_exits',
                data: null
            }
        }
        const info_verify = await jwt.verify(token, Env.JWT_KEY);
        const admin = await this.AdminsModel.findById(info_verify.id);
        admin.tokens = admin.tokens.filter(t => t != token);
        admin.save();
        return {
            message: 'Logout success!',
            data: null
        };
    }
}

module.exports = new AdminService();