const express = require("express"); 
const router = new express.Router(); 
const ProductModel = require("../models/Product.model");
const UserModel = require("../models/User.model");

router.get("/", (req, res) => {
    res.render("profile/index")
})


module.exports = router;
