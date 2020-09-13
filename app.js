const express = require("express");
const env = require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(env.PORT, () => console.log(`Server started on port ${env.PORT}`));
