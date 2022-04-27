const mongoose = require('mongoose')
async function connect(){
    try{
        await mongoose.connect('mongodb://localhost/quiz_database')
        console.log("okie connect to database")
    }catch(error){
        console.log("Fail to connect to database")
    }
}

module.exports = {connect}