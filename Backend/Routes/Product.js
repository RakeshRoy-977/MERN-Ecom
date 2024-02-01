const express = require("express");
const {
  addProduct,
  getAllProduct,
  updateProduct,
  DeleteProduct,
  getSingleProduct,
} = require("../controllers/Product");
const { AuthChecker, RoleChecker } = require("../middlewares/AuthChecker");

const route = express.Router();

//adding product
route.post("/add", AuthChecker, RoleChecker("admin"), addProduct);

//get all product
route.get("/getall", getAllProduct);

//update Product
route.patch("/update/:id", AuthChecker, RoleChecker("admin"), updateProduct);

//delete
route.delete("/delete/:id", AuthChecker, RoleChecker("admin"), DeleteProduct);

//get single
route.get("/single/:id", AuthChecker, RoleChecker("admin"), getSingleProduct);

module.exports = route;
