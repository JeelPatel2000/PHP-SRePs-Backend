const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

let User = new mongoose.Schema({
  username: String,
  password: String,
});

User.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      username: this.username,
    },
    process.env.JWTKey
  );
  return token;
};

module.exports = mongoose.model("users", User);
