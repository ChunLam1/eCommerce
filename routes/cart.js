const router = require("express").Router();
const Product = require("../models/Product.model");

router.get("/", (req, res) => {
  const cart = req.session.cart;
  console.log(req.session.cart[0].productId);
  res.render("cart", { cart });
});

router.patch("/", (req, res) => {
  req.session.cart.push(req.body);
  res.send("To do");
});

module.exports = router;
