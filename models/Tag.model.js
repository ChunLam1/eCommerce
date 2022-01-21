const { Schema, model } = require("mongoose");

const tagSchema = new Schema({
  tag: String,
});

const Tag = model("Tag", tagSchema);

module.exports = Tag;
