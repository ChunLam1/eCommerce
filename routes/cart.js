const router = require("express").Router();
const Product = require("../models/Product.model");

const stripe = require("stripe")("sk_test_VePHdqKTYQjKNInc7u56JBrQ");
const PORT = process.env.PORT || 3000;
const YOUR_DOMAIN = `http://localhost:${PORT}`;

router.get("/", (req, res) => {
  let cart = [];
  // console.log(req.session.cart);
  // console.log(item, "=============================");
  req.session.cart.forEach((products) => {
    Product.findById(products.productId)
      .then((prod) => {
        prod.quantity = products.quantity;
        cart.push(prod);
      })
      .catch((error) => console.error(error));
  });
  res.render("cart", { cart, scripts: ["dom"] });
});

router.get("/empty", (req, res) => {
  req.session.cart = [];
  res.redirect("/cart");
});

router.patch("/", (req, res) => {
  const found = req.session.cart.find(
    (item) => item.productId === req.body.productId
  );
  if (found) found.quantity += Number(req.body.quantity);
  else
    req.session.cart.push({ ...req.body, quantity: Number(req.body.quantity) });
  // console.log(req.session.cart);
  res.status(200).json(req.session.cart);
});

router.post("/create-checkout-session", (req, res) => {
  res.render("checkout");
});

module.exports = router;
