const {
  CATEGOIRES,
  POSTCATEGOIRES,
  DELETECATEGOIRES,
  PUTCATEGOIRES,
} = require("./model.js");

const GET = async (req, res, next) => {
  try {
    let categories = await CATEGOIRES(req.params);
    if (categories) {
      res.status(200).json({
        status: 200,
        message: "OK",
        data: categories,
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
    let category = await POSTCATEGOIRES(req.body);

    if (category) {
      res.status(200).json({
        status: 200,
        message: "OK",
        data: category,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Client Error",
        data: null,
      });
    }
  } catch (error) {}
};

const PUT = async (req, res, next) => {
  try {
    let category = await PUTCATEGOIRES(req.body, req.params);

    if (category) {
      res.status(200).json({
        status: 200,
        message: "Category updated",
        data: category,
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
    let category = await DELETECATEGOIRES(req.params);

    if (category) {
      res.status(200).json({
        status: 200,
        message: "Category deleted",
        data: category,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Client Error",
        data: null,
      });
    }
  } catch (error) {}
};

module.exports = {
  GET,
  POST,
  PUT,
  DELETE,
};
