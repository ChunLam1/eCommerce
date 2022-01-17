const { Schema, model } = require("mongoose")

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number
  },
  quantity:{
    type:Number
  }
})

const Product = model("Product", productSchema)

module.exports = Product
