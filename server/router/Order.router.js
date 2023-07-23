const express = require("express");
const router = express.Router();

const {
    createorder,
    getorder,
    getorders,
    updateorder,
    deleteorder,}=
    require("../controllers/Order.controller");

    router.route("/").post(createorder).get(getorders);
    router.route("/:id").get(getorder).put(updateorder).delete(deleteorder);
    module.exports = router;