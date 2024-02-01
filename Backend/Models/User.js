const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minlength: [2, "Name must be at least 2 characters."],
    maxlength: [50, "Name cannot exceed 50 characters."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address."],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    minlength: [8, "Password must be at least 8 characters."],
    maxlength: [50, "Password cannot exceed 50 characters."],
  },
  avatar: {
    public_id: {
      type: String,
      // required: true,
    },
    url: {
      type: String,
      // required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  resetPassToken: String,
  resetPassExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcryptjs.hash(this.password, 8);
});

//gettimg JWT token
userSchema.methods.getJWT = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_KEY, { expiresIn: "2d" });
};

//comparing password
userSchema.methods.comparePassword = async function (inputPass) {
  return await bcryptjs.compare(inputPass, this.password);
};

//forgot Password token
userSchema.methods.ResetPassToken = function () {
  //random numbers
  const resetPas = crypto.randomBytes(30).toString("hex");

  //hashing and storing it
  this.resetPassToken = crypto
    .createHash(`sha256`)
    .update(resetPas)
    .digest(`hex`);

  //setting token expry date
  this.resetPassExpire = Date.now() + 15 * 60 * 1000;

  return resetPas;
};

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
