const express = require("express");
const {createuser, getoneuser, getallusers, updateuser, deleteuser} = require('../controllers/User.controller.js')


const route = express.Router();

route.post("/create", createuser);
route.get("/allusers", getallusers);
route.get("/:userid", getoneuser);
route.put("/update/:userid", updateuser);
route.delete("/delete/:userid", deleteuser);

module.exports = route;
