const mongoose = require("mongoose");

const ProductModel = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

const ProductSchema = mongoose.model("Product", ProductModel);
module.exports = ProductSchema;
