const express = require("express");
const { addProduct, getAllProduct } = require("../controllers/Product");
const multer = require("multer");
const fs = require("fs");
const route = express.Router();

// Ensure the "ProductsImgs" directory exists
const uploadDirectory = "ProductsImgs";
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

// Multer configuration for disk storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "ProductsImgs/"); // Directory to store uploaded images
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now();
    cb(null, uniqueName + file.originalname);
  },
});
const upload = multer({ storage: storage });

//adding product
route.post("/add", upload.single("image"), addProduct);

//get all product
route.get("/getall", getAllProduct);

module.exports = route;
