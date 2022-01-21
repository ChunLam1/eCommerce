const express = require("express");
const router = express.Router();
const upload = require("../config/cloudinary");
const ProductModel = require("../models/Product.model");
const UserModel = require("../models/User.model");

router.get("/create", (req, res) => {
  res.render("product_add");
});

router.post("/create", upload.single("image"), (req, res, next) => {
  const { name, description, price, image } = req.body;
  const newProduct = {
    name,
    description,
    price,
    image,
  };

  if (req.file) newProduct.image = req.file.path;

  ProductModel.create(newProduct)
    .then(() => res.redirect("/products"))
    .catch(next);
});

router.get("/manage", async (req, res, next) => {
  try {
    const products = await ProductModel.find();
    res.render("product_manage", { products });
  } catch (e) {
    console.error(e);
  }
});

router.get("/manage/:id", async (req, res) => {
  try {
    const oneProduct = await ProductModel.findById(req.params.id);
    res.render("product_edit", { oneProduct });
  } catch (e) {
    console.error(e);
  }
});

router.post("/manage/:id", async (req, res, next) => {
  try {
    await ProductModel.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/products");
  } catch (e) {
    next(e);
  }
});

router.get("/delete/:id", (req, res) => {
  ProductModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/dashboard/manage");
    })
    .catch((error) => console.error(error));
});

module.exports = router;
