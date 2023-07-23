const express = require("express");
const {
  CreateCategory,
  getallcategory,
  getonecategory,
  updatecategory,
  deleteCategory,
} = require("../controllers/Category.controller");

const route = express.Router();

route.post("/create", CreateCategory);
route.get("/allcategory", getallcategory);
route.get("/onecategory", getonecategory);
route.put("/updatecategory/:categoryid", updatecategory);
route.delete("/deletecategory/:categoryid", deleteCategory);

module.exports = route;
