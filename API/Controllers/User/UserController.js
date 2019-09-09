const UserService = require('../../Services/UserService');

class UserController{
    constructor(){
        this.userService = UserService;
    }
    //get profile
    async getProfile({req, res, next}){
        const { user }  = req;
        const result = await this.userService.getProfile(user);
        console.log(result);
        return res.json(result);
    }
    //update profile
    async updateProfile({req, res, next}){
        const {user, body} = req;
       // console.log(user, body);
        const result = await this.userService.updateProfile(user, body);
        console.log(result);
        return res.json(result); 
    }

}

module.exports = new UserController();