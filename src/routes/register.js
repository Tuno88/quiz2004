const express = require('express')
const router = express.Router()

const registerController = require('../app/controllers/RegisterController')
// router.use('/:slug', accountController.login)
router.get('/', registerController.register)
router.post('/',registerController.create)



module.exports = router
