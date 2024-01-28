const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectToDB = require("./db/mongoDB");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

//Routes
app.use("/ProductsImgs", express.static("ProductsImgs"));
app.use("/api/product", require("./Routes/Product"));

//connecting db
connectToDB();

//listing on PORT
app.listen(process.env.PORT, () =>
  console.log(`Server is Up at ${process.env.PORT}`)
);
