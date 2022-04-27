const newsRouter = require('./news')
const loginRouter = require('./login')
const registerRouter = require('./register')
const logoutRouter = require('./logout')
const usersRouter = require('./users')
const quizRouter = require('./quiz')
const cookieParser = require('cookie-parser')

function route(app){
  
    // app.get('/', (req, res) => {
    // res.render('home')
    // })
    // app.use(cookieParser('jwtSecret'))
    // app.use('/',(req,res)=>{
    //     console.log(req.signedCookies)
    //     res.send('abc')
    // })
    app.use('/login',loginRouter)
    app.use('/mypage', newsRouter)
    app.use('/register',registerRouter)
    app.use('/logout',logoutRouter)
    app.use('/user',usersRouter)
    app.use('/quiz',quizRouter)
    app.use('/export',newsRouter)
    app.use('/',loginRouter)
}

module.exports = route