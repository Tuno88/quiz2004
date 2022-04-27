const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const User = new Schema({
    name: {type:String,
             required:[true,'Please input your name'] },
    email: {type:String,
            required:[true,'Please input your email'],
             unique:true,
            validate:{
                validator:validator.isEmail,
                message:'Please provide valid email'
            }},
    password: {type:String,
            require:[true,'Please input your password']},
    startedDate: {type: Date},
    role:{type:String,
            enum:['admin','user'],
            default:'user'}
  })

  User.pre('save',async function(){
          const salt = await bcrypt.genSalt(10)
          this.password = await bcrypt.hash(this.password,salt)
  })

  User.methods.comparePassword = async function(canditatePassword){
          const isMatch = await bcrypt.compare(canditatePassword, this.password)
          return isMatch
  }
  module.exports = mongoose.model('User',User)