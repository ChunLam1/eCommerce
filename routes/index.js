const router = require("express").Router();
const Product = require("../models/Product.model");
const Checkout = require("../models/Checkout.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/our-story", (req, res) => {
  res.render("story");
});

router.get("/products", async (req, res, next) => {
  try {
    const products = await Product.find();
    res.render("products", {
      products,
      css: ["products"],
      scripts: ["basket"],
    });
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
