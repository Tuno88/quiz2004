const jwt = require('jsonwebtoken')
const User = require('../models/User')
const {
    attachCookiesToResponse
} = require('../../utils')
const {
    mongooseToObject
} = require('../utils/mongoose')
// const remember = document.getElementById('remember').value
class RegisterController {
    register(req, res) {
        res.render('register')
    }
    async create(req, res, next) {
        const {
            email
        } = req.body
        const emailAlreadyExists = await User.findOne({
            email
        })
        if (emailAlreadyExists) {
            res.send('email already exists')
        }
        const user = await User.create(req.body)
        const tokenUser = {
            name: user.name,
            userId: user._id,
            role: user.role
        }
        attachCookiesToResponse({
            res,
            user: tokenUser
        })
        res.render('home', {
            user: mongooseToObject(user)
        })
    }
}

module.exports = new RegisterController