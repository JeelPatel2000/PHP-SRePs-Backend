const mongoose = require("mongoose");
const validator = require("validator");

let salesRecord = new mongoose.Schema({
  customerName: String,
  invoiceDate: {
    type: Date,
    default: Date.now,
  },
  products: [{
      _id: false,
      _id: String,
      name: String,
      price: Number,
      quantity: Number,
  }],
  totalAmount: Number
});

module.exports = mongoose.model("salesRecord", salesRecord );
