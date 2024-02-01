const express = require("express");
const {
  addUser,
  LoginUser,
  logOut,
  forgetPassword,
} = require("../controllers/User");

const route = express.Router();

route.post("/create", addUser);
route.post("/login", LoginUser);
route.post("/forgetpassword", forgetPassword);
route.get("/logout", logOut);

module.exports = route;
