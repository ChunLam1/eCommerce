require("dotenv").config();
require("../db/index");
const TagModel = require("../models/Tag.model");

const tags = [
  {
    label: "New",
  },
];

(async function insertTag() {
  try {
    await TagModel.deleteMany();
    const inserted = await TagModel.insertMany(tags);
    console.log(`seed Tag done : ${inserted.length} documents inserted !`);
  } catch (err) {
    console.error(err);
  }
})();
