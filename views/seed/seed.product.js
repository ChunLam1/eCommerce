require("dotenv").config();
require("../../config/mongodb");
const ProductModel = require("../models/Product.model");

const product = [
    {
    name: "BLABLA",
    description:"FAFAFAFA",
    price:429    
    },
    {
    name: "GOGOOGG",
    description:"GRAWWR",
    price:799    
    },
    {
    name: "FUFUFUFUFU",
    description:"BLOP",
    price:612    
    }
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

