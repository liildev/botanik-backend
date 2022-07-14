const {
  GETNEWS,
  POSTPRODUCTS,
  PUTPRODUCTS,
  DELETEPRODUCTS,
} = require("./model");

const GET = async (req, res, next) => {
  try {
    let news = await GETNEWS();
    if (news) {
      res.status(200).json({
        status: 200,
        message: "OK",
        data: news,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Client Error",
        data: null,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const POST = async (req, res, next) => {
  try {
    const product = await POSTPRODUCTS(req.params, req.body);
    if (product) {
      res.status(201).json({
        status: 201,
        message: "Product Added",
        data: product,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Client Error",
        data: null,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const PUT = async (req, res, next) => {
  try {
    const product = await PUTPRODUCTS(req.params, req.body);
    if (product) {
      res.status(200).json({
        status: 200,
        message: "Product Updated",
        data: product,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Client Error",
        data: null,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

const DELETE = async (req, res, next) => {
  try {
    const product = await DELETEPRODUCTS(req.params);
    if (product) {
      res.status(200).json({
        status: 200,
        message: "Product Deleted",
        data: product,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Client Error",
        data: null,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  GET,
  POST,
  PUT,
  DELETE,
};
