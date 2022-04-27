const express = require('express')
const router = express.Router()

const logoutController = require('../app/controllers/LogoutController')
// router.use('/:slug', accountController.login)
router.get('/', logoutController.logout)

module.exports = router