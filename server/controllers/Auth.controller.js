const Usermodel = require('../models/Users.model.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const hash = async(password) =>{
    
}

const signup = async(req, res)=>{
    try {
    const username = await req.body.username;
    const email = await req.body.email;
    const address = await req.body.address;
    const phone = await req.body.phone;
    const password = await req.body.password;
    const passwordHash =await hash(password);

        const newUser = await Usermodel.create({username, email,phone,address ,password:passwordHash});
        const token = jwt.sign({
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            address: newUser.address,
            phone: newUser.phone,
            password:newUser.password},process.env.jwtsecretkey,{expiresIn:process.env.jwtexpire}
            )
            
            res.status(200).json(newUser, token);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

const login= async()=>{
    const email = await req.body.email;
    const password = await req.body.password;

    const user = await Usermodel.findOne({email:email});

    if(user || (bcrypt.compare(password, user.password))){
        return user
    }else{
        return("email or password is incorect")
    }

    const token = jwt.sign({
        id: user._id,
        email: newUser.email,
        password:user.password},process.env.jwtsecretkey,{expiresIn:process.env.jwtexpire}
        )

        res.status(200).json(user, token);

}

module.exports ={signup, login}