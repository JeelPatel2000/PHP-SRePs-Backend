const express = require("express");
const env = require("dotenv").config();
const app = express();
const productRoute = require("./routes/product");
const loginRoute = require("./routes/login");
const bodyparser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(cors({ origin: true }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/login", loginRoute);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/products", productRoute);

app.listen(3001, () => console.log(`Server started on port ${3001}`));
