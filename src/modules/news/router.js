const router = require("express").Router();
const controller = require("./controller.js");

router.route('/news')
    .get(controller.GET)
    .post(controller.POST)


router.route("/news/:id")
    .get(controller.GET)
    .put(controller.PUT)
    .delete(controller.DELETE)


module.exports = router;
