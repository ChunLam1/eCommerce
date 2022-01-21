require("dotenv").config();
require("../db/index");
const ProductModel = require("../models/Product.model");

const products = [
  {
    name: "DIOR ATTRACT PUMP",
    description:
      "A heel extending from the back of the shoe to the front of the shank.",
    price: 599,
    modelId: "shoe",
    image: "/images/sandales à talons compensés.jpg",
  },
  {
    name: "ESCARPIN DE LA FONTAINE",
    description:
      "I went out to a party in my mom's high heels. My friends thought I had mommy-ish shoes",
    price: 629,
    modelId: "shoe",
    image: "/images/Talon aiguille.jpg",
  },
  {
    name: "CAT SHIRT",
    description: "May the Force be with you.",
    price: 299,
    modelId: "Tshirt",
    image: "/images/T-SHIRT CAT.png",
  },
  {
    name: "CATTY PAOLO",
    description: "Warming pull for warm heart",
    price: 389,
    modelId: "Tshirt",
    image: "/images/PullBlanc.jpg",
  },
  {
    name: "CAT BAG EDITION:DE LA ROCHE",
    description: "100% natural, made with LOVE",
    price: 899,
    modelId: "bags",
    image: "/images/Sac Luxe noir.png",
  },
  {
    name: "BIG BAG BIG HEART",
    description: "BIG BAG TO FILL BIG MONEY",
    price: 999,
    modelId: "bags",
    image: "/images/Sac Luxe cuir.png",
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
