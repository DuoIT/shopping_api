const AdminsService = require('../../Services/AuthAdminService')

class AdminController{
    constructor(){

    }
    //register
    async register({req, res, next}){
        const { body } = req;
        const result = await AdminsService.register(body);
        console.log(result);
        res.json(result);
    }
    //login
    async login({req, res, next}){
        const {body} = req;
        console.log(body);
        const result = await AdminsService.login(body);
        console.log(result);
        res.json(result); 
    }
    //logout
    async logout({req, res, next})
    {
        const {headers} = req;
        //console.log(headers);
        const result = await AdminsService.logout(headers);
        //console.log(result);
        res.json(result);
    }
    
}

module.exports = new AdminController();