const UsersModel = require('../Models/UsersModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

class UsersService {
    constructor() {
        this.UsersModel = UsersModel;
    }
    //register
    async register(body) {

        const email = body.email;
        const name = body.name;
        const phone = body.phone;
        const password = body.password;

        if (!body.name || !body.password || !body.email || !body.phone) {
            return {
                message: 'name_or_password_or_email_or_phone_is_require!'
            }
        }

        const user = await this.UsersModel.findOne({ 'email': email }).exec();
        if (user) {
            return {
                message: 'Email_is_exit',
                result: null
            }
        }
        const salt = await bcrypt.genSaltSync(10);
        const passwordHash = await bcrypt.hashSync(body.password, salt);
        //console.log(passwordHash);

        const newUser = new this.UsersModel({
            name: body.name,
            password: passwordHash,
            email: body.email,
            phone: body.phone,
            status: 1,
            dateCreate: Date.now(),
            tokens: []
        });

        const NewUser = await newUser.save();
        console.log(NewUser);

        let token = await jwt.sign({
            id: NewUser._id
        }, Env.JWT_KEY)

        console.log(token);
        // const success = await this.UsersModel.findOne({email: NewUser.email}).update({"tokens": JSON.stringify([token])}).exec();

        try {
            const success = await this.UsersModel.findOne()
                .where("email").in(NewUser.email)
                .exec();
            console.log(success);
            success.tokens = [token];
            success.save();
            return {
                success: true,
                message: 'Register success!!',
                result: {
                    name: NewUser.name,
                    email: NewUser.email,
                    status: NewUser.status,
                    token
                }
            }
        } catch (error) {
            return {
                success: false,
                message: 'Register fail',
                result: null
            }
        }
    }
    //login
    async login(body) {
        const email = body.email;
        const password = body.password;

        if (!body.email || !body.password) {
            return {
                message: 'Email_or_password_is_require!!!'
            }
        }
        const user = await this.UsersModel.findOne({ 'email': email }).exec();
        if (!user) {
            return {
                message: 'Email_is_wrong!',
                result: null
            }
        }
        const com = await bcrypt.compareSync(body.password, user.password);
        if (!com)
            return {
                message: 'Password_is_wrong!',
                result: null
            }
        const token = await jwt.sign({
            id: user._id
        }, Env.JWT_KEY)

        console.log(token);
        user.tokens = [...user.tokens, token];
        user.save();
        return {
            success: true,
            message: 'Login Success!!!',
            result:
            {
                user, token
            }
        }

    }
    //logout
    async logout(headers) {
        const token = headers.authorization;
        const info_verify = await jwt.verify(token, Env.JWT_KEY);            
        const user = await this.UsersModel.findById(info_verify.id);
        user.tokens = user.tokens.filter(t => t !== token);
        user.save();
        return {
            message: 'Logout success!',
            data: null
        };
    }
}

module.exports = new UsersService();