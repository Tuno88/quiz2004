#### User Model
- create models folder and User.js file
- create schema with name, email, password, startDate
- export mongoose model

### Auth Routes Structure
- (create controllers folder) --no
- add authController file
- export (register, login, logout) functions
- res.send('some string value')
- create routes folder
- setup authRoutes file
- import all controllers
- setup three routes
- post('/register') post('/login') get('/logout')
- import authRoutes as authRouter in the index.js
- setup app.use('/api/v1/auth',authRouter)

#### Register Controller
- create user
- send response with entire user (only while testing)
- check if email already in use
- ignore 'role'
- alternative 'admin' setup

### Handle Password

- Userschema.pre('save') - hook
- this points to User
- bcrypt.genSalt - number of rounds
- bcrypt.hash

### JWT

- require 'jsonwebtoken' package
- create jwt - jwt.sign(payload,secret, options)
- verify jwt -jwt.verify(token, secret)
- add variables in .env JWT_SECRET=jwtSecret and JWT_LIFETIME = 10s
- restrat the server
- refactor code, create jwt function in utils
- refactor cookie code
- setup func attachCookiesToResponse
- accept payload(tokenUser)
- create token, setup cookie
- send back the response or not

### Login Route

- check if email and password exist, if one missing return 400
- find user, if no user return 401
- check password, if does not match return 401
- if everything is correct, attact cookie and send back the same response as in register

### Logout Route

- set token cookie equal to some string value
- set expires:new Date(Date.now())

### User Routes Structure

- add userController file
- export (getAllUsers, getSingleUser, showCurrentUser, updateUser,updateUserPassword) function
- res.send('some string value')
- set up userRoutes file
- import all controllers
- setup just one route - router.route('/').get(getAllUsers)
- import userRoutess as userRouter in the index.js
- setup app.use('/user',userRouter)

### GetAllUsers and GetSingleUser

- get all users where role is 'user' and remove password
- get Single User where id matches id param and remove password
- if no user 404

## 28/04/2022
- contextPath trong js là gì
- get random như thế nào
- làm sao để các documents ko bị trùng nhau
- export ra file pdf