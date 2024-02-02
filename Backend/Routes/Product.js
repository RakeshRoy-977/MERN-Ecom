const express = require("express");
const {
  addProduct,
  getAllProduct,
  updateProduct,
  DeleteProduct,
  getSingleProduct,
  Raiting,
} = require("../controllers/Product");
const { AuthChecker, RoleChecker } = require("../middlewares/AuthChecker");

const route = express.Router();

//adding product
route.post("/add", AuthChecker, RoleChecker("admin"), addProduct);

//get all product
route.get("/getall", getAllProduct);

//get single
route.get("/single/:id", getSingleProduct);

//Rate Product
route.patch("/review", AuthChecker, Raiting);

//update Product
route.patch("/update/:id", AuthChecker, RoleChecker("admin"), updateProduct);

//delete
route.delete("/delete/:id", AuthChecker, RoleChecker("admin"), DeleteProduct);

module.exports = route;
