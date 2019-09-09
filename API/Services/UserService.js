const UsersModel = require('../Models/UsersModel');

class UserService {
    constructor() {
        this.usersModel = UsersModel;
    }
    //get profile
    async getProfile(user) {
        //console.log(user);
        if(!user){
            return{
                message: 'Get_profile_wrong!!'
            }
        }
        else{
        return {
            message: 'Get_profile_success!!!',
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone
            }
        }
    }
}
    //update profile
    async updateProfile(user, body) {
        console.log(user);
        const newname = body.name;
        const newphone = body.phone;
        //console.log(newname, newphone);
        if (!newname || !newphone ) {
            return {
                message: 'Newname_or_Newphone_is_wrong!',
                data: null
            }
        }
        const dataNewName = await this.usersModel.findOne({ '_id': user._id }).update({ name: newname, phone: newphone }).exec();
        //console.log(dataNewName);
        if (dataNewName) {
            return {
                message: 'Update success!!'
            }
        }
    }
}

module.exports = new UserService();