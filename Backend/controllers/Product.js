const { validationResult } = require("express-validator");
const ProductSchema = require("../Models/Product");

const addProduct = async (req, res) => {
  try {
    // Create the product with image details
    const productData = {
      ...req.body,
      image: req.file.filename,
    };

    const product = await ProductSchema.create(productData);

    return res.json(product);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const getAllProduct = async (req, res) => {
  try {
    const product = await ProductSchema.find();
    if (!product) {
      return res.json("No Product Found");
    }
    return res.json(product);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = { addProduct, getAllProduct };
