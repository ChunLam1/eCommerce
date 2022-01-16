require("dotenv").config();
require("../db/index");
const ProductModel = require("../models/Product.model");

const products = [
  {
    name: "360° AX BLADE",
    description: "Three Body X 360° | Basketball Shoes",
    price: 420,
    modelId: "shoe"
  },
];

(async function insertProduct() {
    try {
      await ProductModel.deleteMany();
      const inserted = await ProductModel.insertMany(products);
      console.log(`seed Product done : ${inserted.length} documents inserted !`);
    } catch (err) {
      console.error(err);
    }
  })();

