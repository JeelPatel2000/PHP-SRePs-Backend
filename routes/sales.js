const express = require("express");
const router = express.Router();
const _db = require("../utils/db");
const SalesRecordModel = require("../models/salesRecordModel");
const { route } = require("./product");

router.post("/add",(req,res)=>{
	SalesRecordModel.create(req.body)
		.then((result) => res.send(result))
    .catch((err) => {
      console.log(err);
    });
});

router.get("/search/:id", (req,res)=>{
	const _id = req.params.id;
	SalesRecordModel.findById(req.params.id)
		.then((result)=>res.send(result))
		.catch((err)=>console.error(err));
})

router.get("/list", (req,res)=>{
	SalesRecordModel.find()
		.then(result=>res.send(result))
		.catch(err=>console.error(err));
})

module.exports = router;