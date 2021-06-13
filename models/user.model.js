const mongoose = require ("mongoose");
const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

const userChema = new Schema({
    name : { type: string, required: true},
    username : { type: string, required},
    password : { type: string, required: true}
})

userSchema.methods.comparePasswords = function(password){
    return compareSync(password, this.password);
}

userChema.methods.toJSON = function(){
    let user = this.toObject();
    delete user.password;
    return user;
}

userChema.pre('save', async function(next){
    const user = this;
    if(!user.isModified("password")){
        return next()
    }
    const salt = genSaltSync(10);
    const hashedPassword = hashSync(user.password, salt);
    user.password = hashedPassword;
    next();
})



module.exports = mongoose.model("user",userChema); 