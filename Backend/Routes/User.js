const express = require("express");
const {
  addUser,
  LoginUser,
  logOut,
  forgetPassword,
  updateProfile,
  getAllUser,
  getUser,
} = require("../controllers/User");
const { AuthChecker } = require("../middlewares/AuthChecker");

const route = express.Router();

route.post("/create", addUser);
route.post("/login", LoginUser);
route.post("/forgetpassword", AuthChecker, forgetPassword);
route.get("/logout", AuthChecker, logOut);
route.patch("/update", AuthChecker, updateProfile);

//admin Routes
route.get("/admin/users", AuthChecker, RoleChecker("admin"), getAllUser);
route.get("/admin/user/:id", AuthChecker, RoleChecker("admin"), getUser);

module.exports = route;
