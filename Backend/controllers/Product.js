const { validationResult } = require("express-validator");
const ProductSchema = require("../Models/Product");
const { json } = require("express");

const addProduct = async (req, res) => {
  try {
    //express validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const product = await ProductSchema.create(req.body);
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
