require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, 'uploads')))
app.use(express.json());
app.use(cors());

app.use(require('./middlewares/authorization.js'))
app.use(require("./modules/index.js"));

app.listen(process.env.PORT, () => console.log(`*${process.env.PORT}`));
