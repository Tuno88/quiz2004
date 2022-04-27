require('dotenv').config()
require('express-async-errors')

const path = require('path')
const express = require('express')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const handlebars = require("express-handlebars")
// const mongoose = require('')
const app = express()
const port = 3000
const route = require('./routes')
const db = require('./app/config/db')
//connect to DB
db.connect()
app.use(express.static(path.join(__dirname,'public')))
//HTTP logger
app.use(morgan('combined'))
//Template engine
app.engine('hbs', handlebars.engine({
  extname:'.hbs'
}))
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname,'resources','views'))

//middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser('jwtSecret'))
//Routes init
route(app)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

