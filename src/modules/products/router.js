const router = require('express').Router()
const upload = require('../../libs/multer.js')
const controller = require('./controller.js')


router.route('/products')
    .get(controller.GET)
    .post(controller.POST)

router.route('/products/:id')
    .get(controller.GET)
    .put(controller.PUT)
    .delete(controller.DELETE)

router.post('/products/:id/images', upload, controller.POSTIMAGE)


module.exports = router