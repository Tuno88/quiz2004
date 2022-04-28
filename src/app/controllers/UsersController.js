const res = require("express/lib/response");
const User = require("../models/User");
const {
    multipleMongooseToObject,
    mongooseToObject
} = require("../utils/mongoose");

const getAllUsers = async (req, res) => {
    // console.log(req.user)
    if (req.user.role == 'admin') {
        console.log("----------------user controller1: " + req.user.userId)
        const users = await User.find({
            // role: 'user'
        }).select('-password')
        res.render('showAllUsers', {
            users: multipleMongooseToObject(users)
        })
    } else {
        res.send("no permission")
    }
};
const getSingleUser = async (req, res, next) => {
    console.log("----------------user controller2: " + req.user)
    const user = await User.findOne({
        _id: req.params.id
    }).select('-password')
    if (!user) {
        console.log("abc------------")
        return res.send(`Something went wront, try again later for ${req.params.id}`)
    }

    res.render('singleUserProfile', {
        user: mongooseToObject(user)
    })

};
const showCurrentUser = async (req, res) => {
    res.send('show current user')
}
const updateUser = async (req, res) => {
    res.send('update user')
}
const updateUserPassword = async (req, res) => {
    res.send('update user password')
}

module.exports = {
    getAllUsers,
    getSingleUser,
    showCurrentUser,
    updateUser,
    updateUserPassword
}