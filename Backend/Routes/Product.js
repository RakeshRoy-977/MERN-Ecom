const express = require("express");
const { body } = require("express-validator");
const { addProduct, getAllProduct } = require("../controllers/Product");

const route = express.Router();

//adding product
route.post(
  "/add",
  [
    body("name").isLength({ min: 3 }),
    body("description").isLength({ min: 3 }),
    body("price").isNumeric(),
    body("image").isLength({ min: 3 }),
  ],
  addProduct
);

//get all product
route.get("/getall", getAllProduct);

module.exports = route;
