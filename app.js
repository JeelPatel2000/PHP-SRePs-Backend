const express = require("express");
const env = require("dotenv").config();
const app = express();
const productRoute = require("./routes/product");
const salesRecordRoute = require("./routes/sales");
const loginRoute = require("./routes/login");
const cors = require("cors");

//parsing request to json
app.use(express.json());
app.use(cors({ origin: true }));

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

//home route
app.get("/", (req, res) => {
  res.send("Home Page");
});

//routing the request to the router
app.use("/products", productRoute);
app.use("/salesRecord", salesRecordRoute)



//defining the port
const PORT = process.env.PORT | 3001
//listening on the port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
