const express = require("express");
const router = express.Router();
const _db = require("../utils/db");
const ProductModel = require("../models/productModel");

router.get("/", (req, res) => {
  res.send("Hello Product");
});

router.get("/list", async (req, res) => {
  let result = await ProductModel.find();
  await res.send(result);
});

router.get("/add", (req, res) => {
  // creating the mongoose data model
  let new_product = new ProductModel({
    name: "Medicine 1",
    price: 100.59,
    stockCount: 200,
  });
  // saving the product to the database
  var result = new_product.save();
  // on result
  result.then((p) => {
    res.send(p);
  });
});

router.post("/add", (req, res) => {
  ProductModel.create(req.body)
    .then((result) => res.send(result))
    .catch((err) => {
      console.log(err);
    });
});

router.get("/delete/:id", (req, res) => {
  //database call
  //delete the product from the database
  console.log("Product Delete Request" + req.params.id);
  ProductModel.findByIdAndDelete(req.params.id)
    .then((result) => res.send(result))
    .catch((err) => console.error(err));
});

router.get("/edit", (req, res) => {
  //database call
  //edit the data
});

module.exports = router;
