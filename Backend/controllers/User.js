const { json } = require("express");
const UserModel = require("../Models/User");
const CustomError = require("../utils/Err_Class");
const sendToken = require("../utils/jwt");
const sendEmail = require("../utils/sendEmail");

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

const forgetPassword = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      throw new CustomError(404, `User Not Found!`);
    }

    // Get Reset Password Token
    const resetToken = user.ResetPassToken();

    // Save the user with the new reset password token
    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get(
      "host"
    )}/password/reset/${resetToken}`;

    const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

    // Sending Email
    try {
      await sendEmail({
        email: user.email,
        subject: `Ecommerce Password Recovery`,
        message,
      });

      res.status(200).json({
        success: true,
        message: `Email sent to ${user.email} successfully`,
      });
    } catch (error) {
      // If there's an error sending the email, unset the reset password token and expiration date
      user.resetPassToken = undefined;
      user.resetPassExpire = undefined;
      await user.save({ validateBeforeSave: false });

      return next(error);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { addUser, LoginUser, logOut, forgetPassword };
