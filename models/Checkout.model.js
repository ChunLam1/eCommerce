const { Schema, model } = require("mongoose")

const checkoutSchema = new Schema({
    quantity: Number
  })

const Checkout = model("Checkout", checkoutSchema)

module.exports = Checkout
