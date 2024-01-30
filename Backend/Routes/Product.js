const express = require("express");
const {
  addProduct,
  getAllProduct,
  updateProduct,
  DeleteProduct,
  getSingleProduct,
} = require("../controllers/Product");

const route = express.Router();

//adding product
route.post("/add", addProduct);

//get all product
route.get("/getall", getAllProduct);

//update Product
route.patch("/update/:id", updateProduct);

//delete
route.delete("/delete/:id", DeleteProduct);

//get single
route.get("/single/:id", getSingleProduct);

module.exports = route;
