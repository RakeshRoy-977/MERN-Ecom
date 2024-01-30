const CustomError = require("../utils/Err_Class");

const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  // Handle Mongoose CastError specifically
  if (err.name === "CastError") {
    statusCode = 400; // Bad Request
    message = "Invalid ID";
  }

  res.status(statusCode).json({
    success: false,
    error: message,
  });
};

module.exports = errorHandler;
