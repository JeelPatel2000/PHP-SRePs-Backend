const User = require("../models/userModel");
const mongoose = require("mongoose");
const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  let user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send("Invalid email or password.");

  const validPassword = req.body.password === user.password;
  if (!validPassword) return res.status(400).send("Invalid email or password");

  const token = user.generateAuthToken();

  res.send(token);
});

module.exports = router;
