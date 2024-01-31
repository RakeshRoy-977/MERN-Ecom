const { json } = require("express");
const UserModel = require("../Models/User");
const CustomError = require("../utils/Err_Class");

const addUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await UserModel.create({
      name,
      email,
      password,
    });
    const token = user.getJWT();

    res.json({
      success: true,
      token,
    });
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

    const token = user.getJWT();
    return res.json({
      success: true,
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { addUser, LoginUser };
