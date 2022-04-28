const express = require('express')
const router = express.Router()
const {
    authenticateUser
} = require('../middleware/authentication')

const {
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword
} = require('../app/controllers/UsersController')
// router.use('/:slug', accountController.login)
router.route('/getUsers').get(authenticateUser, getAllUsers)
router.route('/showMe').get(showCurrentUser)
router.route('/updateUser').patch(updateUser)
router.route('/updateUserPassword').patch(updateUserPassword)
router.route('/:id').get(authenticateUser, getSingleUser)


module.exports = router