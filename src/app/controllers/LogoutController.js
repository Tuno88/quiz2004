const User = require('../models/User')
class LogoutController {
    //[GET] logout
    async logout(req, res) {
        res.cookie('token', 'logout', {
            httpOnly: true,
            expires: new Date(Date.now())
        })
        res.render('login')
    }
}

module.exports = new LogoutController