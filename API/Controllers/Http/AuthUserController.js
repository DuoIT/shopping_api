const UsersService = require('../../Services/AuthUserService');

class UserController{
    constructor(){

    }
    //register
    async register({req, res, next}){
        const { body } = req;
        const result = await UsersService.register(body);
        console.log(result);
        res.json(result);
    }
    //login
    async login({req, res, next}){
        const{body} = req;
        //console.log(body);
        const result = await UsersService.login(body);
        console.log(result);
        res.json(result); 
    }
    //logout
    async logout({req, res, next})
    {
        const {headers} = req;
        const result = await UsersService.logout(headers);
        console.log(result);
        res.json(result);
    }
}
module.exports = new UserController();