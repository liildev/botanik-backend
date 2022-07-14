const router = require('express').Router()
const controller = require('./controller.js')
const upload = require('../../libs/multer.js')

router.route('/banners')
    .get(controller.GET)
    .post(upload, controller.POST)

router.route('/banners/:id')
    .get(controller.GET)
    .delete(controller.DELETE)



module.exports = router