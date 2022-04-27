const User = require('../models/User')
const {attachCookiesToResponse} = require('../../utils')
class LoginController{
    //[GET] login
    login(req,res){
        res.render('login')
    }
   
    //[POST] login
    async validateLogin(req,res,next){
        const {email,password} = req.body
        if(!email || !password){
            return res.send('please provide email and password')
        }
        const user = await User.findOne({email})
        if(!user){
            return res.send('invalid credentials')

        }
        const isPasswordCorrect = await user.comparePassword(password)
        if(!isPasswordCorrect){            
            return res.send('invalid password'+password)
        }
        const tokenUser = {name:user.name, userId:user._id,role:user.role}
       console.log(user._id+"-----------------")
        
        attachCookiesToResponse({res,user:tokenUser})
        // res.status(200).json({user:tokenUser})
        res.redirect('mypage')
        // if(user.role=='user'){
        //     // req.session.user = user;
        //     // req.session.isLoggedIn = true;
        //     return res.render("home",user)
        // }else{
        //     return res.render('mypage',user)
            
        // }
    }
}

module.exports = new LoginController