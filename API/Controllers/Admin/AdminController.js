const AuthAdminService = require('../../Services/AuthAdminService');


class AdminController{
    constructor(){
        this.authAdminService = AuthAdminService;
    }
   

}


module.exports = new AdminController();