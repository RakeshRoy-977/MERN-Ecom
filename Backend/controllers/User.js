const { json } = require("express");
const UserModel = require("../Models/User");
const CustomError = require("../utils/Err_Class");
const sendToken = require("../utils/jwt");

const addUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.create({
      name,
      email,
      password,
    });

    sendToken(user, 201, res);
  } catch (error) {
    next(error);
  }
};

const LoginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new CustomError(401, "Please enter both email and password.");
    }

    //chcking if user is reg or not
    const user = await UserModel.findOne({ email }).select("+password");

    if (!user) throw new CustomError(401, "No User found");

    //comparing password
    const isPasswordCorrect = await user.comparePassword(password);

    if (!isPasswordCorrect) {
      throw new CustomError(401, "Please check Email/Password");
    }

    sendToken(user, 200, res);
  } catch (error) {
    next(error);
  }
};

//Logout end point
const logOut = async (req, res, next) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.json({
      success: true,
      message: `Logged Out`,
    });
  } catch (error) {}
};

//Reset Password Token
const forgetPassword = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) throw new CustomError(404, "User not Found");

    const resetToken = user.resetPassToken();
    await user.save({});
  } catch (error) {
    next(error);
  }
};

module.exports = { addUser, LoginUser, logOut };
