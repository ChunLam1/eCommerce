const express = require("express");
const async = require("hbs/lib/async");
const router = new express.Router();
const ProductModel = require("../models/Product.model");
const { findByIdAndDelete } = require("../models/User.model");
const UserModel = require("../models/User.model");

router.get("/create", (req, res) => {
  res.render("product_add");
});

router.post("/create", (req, res) => {
  ProductModel.create(req.body)
    .then(() => res.redirect("/products"))
    .catch((err) => console.error(err));
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
