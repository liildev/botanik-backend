const router = require('express').Router()
const contoller = require('./controller.js')

router.route('/categories')
    .get(contoller.GET)
    .post(contoller.POST)

router.route('/categories/:id')
    .get(contoller.GET)
    .put(contoller.PUT)
    .delete(contoller.DELETE)


module.exports = router