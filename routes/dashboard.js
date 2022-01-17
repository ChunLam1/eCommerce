const express = require("express"); 
const router = new express.Router(); 
const ProductModel = require("../models/Product.model");
const UserModel = require("../models/User.model");


router.get("/create", (req, res) => {
    res.render("product_add");
  });

router.post("/create",(req, res) =>{
    ProductModel
    .create(req.body)
    .then(()=>res.redirect("/products"))
    .catch(err => console.error(err)) 
});







module.exports = router;