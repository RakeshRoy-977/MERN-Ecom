const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectToDB = require("./db/mongoDB");
const errorHandler = require("./middlewares/Err");

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));

// Routes
app.use("/api/product", require("./Routes/Product"));
app.use("/api/auth", require("./Routes/User"));

// Error handling middleware
app.use(errorHandler);

// Connecting to the database
connectToDB();

// Listening on PORT
app.listen(process.env.PORT, () =>
  console.log(`Server is up at ${process.env.PORT}`)
);
