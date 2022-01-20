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
  },
  image:{
    type:String
  }
})

const Product = model("Product", productSchema)

module.exports = Product
