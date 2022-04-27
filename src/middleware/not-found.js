const { findOneAndUpdate } = require("../app/models/User");

function notFoundMiddleware(req,res){
    res.status(404).send('Route does not exist')
}

module.exports = notFoundMiddleware