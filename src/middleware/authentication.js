const {isTokenValid} = require('../utils')

const authenticateUser = async (req,res,next) =>{
    const token = req.signedCookies.token
    if(!token){
        return res.status(500).json({msg:`error 1, no token`})
    }
        try{
            console.log("token present")
            const {name, userId,role} = isTokenValid({token})
            console.log("payload: " +name)
            req.user = {name, userId,role}
            next()
            
        }catch(error){
            console.log(error)
            // if(error.name === 'TokenExpiredError') {
            //     const payload = jwt.verify(token, SECRET, {ignoreExpiration: true} )
            return res.status(500).json({msg:`error 2, no valid token`})
        }         
  }

module.exports = {
    authenticateUser
}