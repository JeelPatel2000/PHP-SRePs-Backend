const mongoose = require("mongoose");
const validator = require("validator");

let productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  creationDate: {
    type: Date,
    default: Date.now,
  },
  stockCount: Number,
});

module.exports = mongoose.model("product", productSchema);
