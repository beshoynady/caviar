const Usermodel = require('../models/Users.model.js')
const bcrypt = require('bcrypt');

// const hash = (password) =>{
//     const saltRounds = 10;
//     const salt = bcrypt.genSaltSync(saltRounds);
//     const hash = bcrypt.hashSync(password, salt);
//     return hash
// }


const createuser =async (req, res, next) => {
    try {
        const username = await req.body.username;
        const email = await req.body.email;
        const address = await req.body.address;
        const salary = await req.body.salary;
        const phone = await req.body.phone;
        const role =await req.body.role;
        const isAdmin = await req.body.isAdmin;

        const password = await req.body.password;
        // const passwordHash = bcrypt.hashSync(password,10);
        const newUser = await Usermodel.create({username, email,phone,salary,address ,password, isAdmin, role})
        res.status(200).json(newUser);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

const getoneuser = async (req , res)=>{
    try{
        const userid = await req.params.userid;
        const user = await Usermodel.findById(userid);
        res.status(200).json(user);
    }catch(err){
        res.status(400).json(err)
    }
}
const getallusers = async (req, res)=>{
    try{
        const allusers = await  Usermodel.find({});
        res.status(200).json(allusers);
    }catch(err){
        res.status(400).json(err)
    }
}

const updateuser = async (req ,res)=>{
    try{
        const userid = req.params.userid;
        const username = await req.body.username;
        const email = await req.body.email;
        const address = await req.body.address;
        const salary = await req.body.salary;
        const phone = await req.body.phone;
        const role =await req.body.role;
        const isAdmin = await req.body.isAdmin;

        const password = await req.body.password;
        // const passwordHash = await bcrypt.hash(password, 10);
        const userupdated = await Usermodel.findByIdAndUpdate({_id: userid},{username, email,phone,salary,address ,password, isAdmin, role},{new : true});
        res.status(200).json(userupdated)
    }catch(err){res.status(400).json(err)}
}
const deleteuser = async (req, res)=>{
    try{
        const userid = await req.params.userid;
        const userdeleted = await Usermodel.findByIdAndDelete(userid);
        res.status(200).json(userdeleted);
    }catch(err){
        res.statud(400).json(err)
    }
}


module.exports ={createuser, getoneuser, getallusers, updateuser, deleteuser};