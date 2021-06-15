const { JwHelper } = require('../helpers');
let _userService = null;

class AuthService {
    constructor({ UserService }){
        _userService = UserService;
    }

    async sigup(user){
        const { username } = user;
        const userExits = await _userService.getUserByUsername(username);
        if(userExits){
            const error = new Error();
            error.status = 400;
            error.message = "user already exists";
            throw error;
        }
        return await _userService.create(user);
    }

    async signIn(user){
        const {username, password} = user;
        const userExist = await _userService.getUserByUsername(username);
        if(!userExist){
            const error = new Error();
            error.status = 404;
            error.message = "user doesn't exist";
            throw error;
        }
        const validPassword = userExist.comparePasswords(password);
        if(!validPassword){
            const error = new Error();
            error.status = 400;
            error.message = "Invalid password";
            throw error;
        }
        const userToEncode = {
            username: userExist.username,
            id: userExist._id
        }; 

        const token = JwHelper.generateToken(userToEncode);
        return { token, user: userExist}


    }



}

module.exports = AuthService;