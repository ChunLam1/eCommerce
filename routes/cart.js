const router = require("express").Router();
const Product = require("../models/Product.model");

router.get("/", (req, res) => {
  console.log(req.session.cart);
  res.render("cart");
});

router.patch("/", (req, res) => {
  req.session.cart.push(req.body);
  res.send("To do");
});

module.exports = router;
