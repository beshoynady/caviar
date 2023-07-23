const express = require("express");
const path = require("path");

const {
  createproduct,
  getAllproducts,
  getproductbycategory,
  getoneproduct,
  updateproduct,
  deleteproduct,
} = require("../controllers/product.controller");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = new Date().toISOString().replace(/:/g, "-");
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

const route = express.Router();

route.post("/create", upload.single("image"), createproduct);
route.get("/allproducts", getAllproducts);
route.get("/prouctsbycategory", getproductbycategory);
route.get("/oneproduct", getoneproduct);
route.put("/update/:productid",upload.single("image"), updateproduct);
route.delete("/delete/:productid", deleteproduct);

module.exports = route;
