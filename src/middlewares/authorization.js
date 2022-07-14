const jwt = require("../libs/jwtGenerator.js");
module.exports = (req, res, next) => {
  try {
    if (req.url != "/admin" && req.method != "GET") {
      let { token } = req.headers;
      jwt.verify(token);
      next();
    }

    return next()
  } catch (error) {
    res.sendStatus(401)
  }
};
