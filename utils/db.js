//const express = require("express");
const mongoose = require("mongoose");

const server = "jeel:Pxc3LBLowphI6rRD@cluster0.r15pl.mongodb.net";

const database = "php_db";

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(
        `mongodb+srv://${server}/${database}?retryWrites=true&w=majority`
      )
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error");
      });
  }
}

module.exports = new Database();
