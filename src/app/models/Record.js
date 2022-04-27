const mongoose = require('mongoose')
const random = require('mongoose-random')
const validator = require('validator')
const Record_Detail = require('./Record_Detail')
const Schema = mongoose.Schema
const SingleQuestion = mongoose.Schema({
    name: {type:String,
        required:[true,'Please input question code'],
       },
        content:{type:String},
selectedOption:{
   type:String,
   require:[true,'Please input your answer'],
},
score:{type:Number}
})
const Record = new Schema({
    user: {type:mongoose.Schema.ObjectId,
        ref:'User',
             required:[true,'Please input record code'],
              },
    question: [SingleQuestion],
    score: {type:Number,
            },
    createdAt: {type:Date, default:Date.now},
  })
//   module.exports = mongoose.model('Record_Detail',Record_Detail)
  module.exports = mongoose.model('Record',Record)