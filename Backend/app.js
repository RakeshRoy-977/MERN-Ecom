const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT;
//mid wears
app.use(express.json());
app.use(cors());

app.listen(port, () => console.log(`server is up at ${port}`));
