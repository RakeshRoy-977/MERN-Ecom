const jwt = require("jsonwebtoken");
const CustomError = require("../utils/Err_Class");
const UserModel = require("../Models/User");

const AuthChecker = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) throw new CustomError(404, "Please Login");
    const decode = jwt.verify(token, process.env.JWT_KEY);
    req.user = await UserModel.findById(decode.id);
    next();
  } catch (error) {
    next(error);
  }
};

const RoleChecker = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new CustomError(403, "Unauthorized access");
    }

    next();
  };
};

module.exports = { AuthChecker, RoleChecker };
