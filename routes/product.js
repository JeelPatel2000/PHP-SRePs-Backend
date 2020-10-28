const express = require("express");
const router = express.Router();
const _db = require("../utils/db");
const ProductModel = require("../models/productModel");
const { Mongoose } = require("mongoose");

router.get("/", (req, res) => {
  res.send("Hello Product");
});

router.get("/list",  (req, res) => {
  ProductModel.find()
    .then((result)=>res.send(result));
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

router.post("/edit", (req, res) => {
  //database call
  //edit the data
  ProductModel.findOneAndUpdate(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, result) => {
      if (err) return res.status(500).send(err);
      return res.send(result);
    }
  );
});

module.exports = router;
