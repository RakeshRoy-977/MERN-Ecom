const ProductSchema = require("../Models/Product");
const CustomError = require("../utils/Err_Class");

const addProduct = async (req, res) => {
  try {
    const product = await ProductSchema.create(req.body);

    return res.status(201).json({
      success: true,
      product,
    });
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

//get single product
const getSingleProduct = async (req, res, next) => {
  try {
    const product = await ProductSchema.findById(req.params.id);

    if (!product) {
      throw new CustomError(404, "Resource not found");
    }

    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    next(error);
  }
};

//update product
const updateProduct = async (req, res) => {
  try {
    id = req.params.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "invalid ID",
      });
    }
    const product = await ProductSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

//Delete Product
const DeleteProduct = async (req, res) => {
  try {
    id = req.params.id;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "invalid ID",
      });
    }
    await ProductSchema.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
module.exports = {
  addProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  DeleteProduct,
};
