const mongoose = require('mongoose')
const random = require('mongoose-random')
const validator = require('validator')
const Schema = mongoose.Schema

const Question = new Schema({
    name: {type:String,
             required:[true,'Please input question code'],
           },
    question: {type:String,
            required:[true,'Please input your question'],
           },
    option1: {type:String,
            require:true},
    option2: {type:String,
            require:true},
    option3: {type:String,
            },
    option3: {type:String,
          },
    answer:{
        type:String,
        require:[true,'Please input your answer'],
    }
  })
  Question.plugin(random,{path:'r'})
  
  module.exports = mongoose.model('Question',Question)