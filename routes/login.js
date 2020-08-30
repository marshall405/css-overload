const router = express = require('express').Router()
const User = require('../models/User')

router.get('/', (req, res) => {
    res.render("login")
})

router.post('/', async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (!user) {
        return res.render("login", { error: "Username not found" })
    }
    if (user.password === password) {
        req.session.user = user
        res.redirect("/dashboard")
    } else {
        return res.render("login", { error: "Password incorrect" })
    }


})
module.exports = router;
