const router = require("express").Router();
const Product = require("../models/Product.model");

router.get("/", (req, res) => {
  // console.log(req.session.cart + "-----------------------");
  let cart = []
  req.session.cart.forEach((item) => {
  // console.log(item, "=============================");
  Product.findById(item.productId)
  .then((prod)=>{
    prod.quantity = item.quantity
    // console.log(prod)
    cart.push(prod)
    // console.log('NEW CART:', cart)
  })
  .catch (error => console.error(error))
  })
  res.render("cart",{cart});
});


router.patch("/", (req, res) => {
  req.session.cart.push(req.body);
  res.send("To do");
});

module.exports = router;
