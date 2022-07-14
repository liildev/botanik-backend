const { GETBANNERS, POSTBANNERS, DELETEBANNERS } = require("./model");

const GET = async (req, res, next) => {
  try {
    const banners = await GETBANNERS(req.params);
    if (banners) {
      res.status(200).json({
        status: 200,
        message: "OK",
        data: banners,
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
    const banners = await POSTBANNERS(req.files);
    if (banners) {
      res.status(201).json({
        status: 201,
        message: "Banner Image Added",
        data: banners,
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
    const banner = await DELETEBANNERS(req.params);
    if (banner) {
      res.status(200).json({
        status: 200,
        message: "Banner Deleted",
        data: banner,
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
  DELETE,
};
