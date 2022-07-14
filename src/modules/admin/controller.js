const { sign } = require("../../libs/jwtGenerator.js");
const { ADMINLOGIN } = require("./model.js");

const LOGIN = async (req, res, next) => {
  try {
    let admin = await ADMINLOGIN(req.body);

    if (admin) {
      res.status(200).json({
        status: 200,
        message: "You logged",
        token: sign(admin.admin_id),
      });
    } else {
      res.status(401).json({
        status: 401,
        message: "Wrong Password or Username",
        token: null,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  LOGIN,
};
