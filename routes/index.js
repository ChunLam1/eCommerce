const router = require("express").Router();
const Product = require("../models/Product.model");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/products", async (req, res, next) => {
  try {
    const products = await Product.find();
    res.render("products", {
      products,
      css: ["products"]
    })
  } catch (e) {
    console.error(e);
  }
  
});

router.get("/checkout", (req, res, next) => {
  res.render("checkout");
});


module.exports = router;
