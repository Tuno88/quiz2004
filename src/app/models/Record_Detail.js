const mongoose = require('mongoose')
const random = require('mongoose-random')
const validator = require('validator')
const Schema = mongoose.Schema

const Record_Detail = new Schema({
    record: {type:mongoose.Schema.ObjectId,
        ref:'Record',
             required:[true,'Please input record code'],
              },
    question: {type:mongoose.Schema.ObjectId,
        ref:'Question',
             required:[true,'Please input record question'],
              },
   score: {type:Number,
            default:0,
            require:true},
   })

  module.exports = mongoose.model('Record_Detail',Record_Detail)