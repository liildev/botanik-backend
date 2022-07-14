const router = require('express').Router()
const controller = require('./controller.js')

router.post('/admin', controller.LOGIN)

module.exports = router