function UnauthenticatedError(err,req,res,next){
    console.log(err)
    return res.status(500).json({msg:`Customer error`})
}

module.exports = errorHandlerMiddleware