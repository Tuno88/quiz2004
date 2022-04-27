const express = require('express')
const router = express.Router()

const loginController = require('../app/controllers/LoginController')
// router.use('/:slug', accountController.login)
router.get('/', loginController.login)
router.post('/',loginController.validateLogin)
// router.get('/', loginController.logout)

module.exports = router