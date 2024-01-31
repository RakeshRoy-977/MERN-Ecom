const express = require("express");
const { addUser, LoginUser } = require("../controllers/User");
const CustomError = require("../utils/Err_Class");

const route = express.Router();

route.post("/create", addUser);
route.post("/login", LoginUser);

module.exports = route;
