const express = require('express')
const cookieSession = require('cookie-session')
const multer = require('multer')
const upload = multer()
const path = require('path')
const app = express()
const mongoose = require('mongoose')

// Set template engine and views
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, "views"))

// Serve Static Files
app.use(express.static('public'))

// Bring in Environment Variables
require('dotenv').config()


/*              Middleware          */
app.use(cookieSession({
    name: 'session',
    keys: ['super_secret_key'],
    maxAge: 24 * 60 * 60 * 1000 //24 hours
})) // use cookie for user auth
app.use(express.json()) // parses the request body
app.use(upload.array()) // parses form data 

/*          End of Middleware       */


function checkUserSignedIn(req, res, next) {
    if (req.session.user) { return res.redirect('/dashboard') }
    next()
}
// IMPORT ROUTES
app.get('/', checkUserSignedIn, (req, res) => {
    res.render('index')
})

const loginRouter = require("./routes/login")
app.use('/login', checkUserSignedIn, loginRouter)

const signupRouter = require("./routes/signup")
app.use('/signup', checkUserSignedIn, signupRouter)

const logoutRouter = require('./routes/logout')
app.use('/logout', logoutRouter)

const dashboardRouter = require('./routes/dashboard')
app.use('/dashboard', dashboardRouter)

// Connect to DB
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(error => console.log(error)) //handle error when attempting to connect

const db = mongoose.connection
db.on('error', error => console.log(error)) // handle error after connectiong
db.once('open', () => console.log('Connected to MongoDB'))

// START SERVER
const PORT = 3000
app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`))