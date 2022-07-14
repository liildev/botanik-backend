const auth = require("./admin/router.js");
const categories = require("./categories/router.js");
const news = require("./news/router.js");
const products = require("./products/router.js");
const banners = require("./banners/router.js");

module.exports = [auth, categories, news, products, banners];
