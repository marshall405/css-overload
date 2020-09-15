const router = require('express').Router();
const User = require('../models/User')

const { registerValidation } = require('../validations/userValidation')

router.get('/', (req, res) => {
    res.render("signup")
})

router.post('/', async (req, res) => {
    const { username, email, password, password_confirmation } = req.body
    const userData = {
        error: "", username, email, password, password_confirmation
    }
    // check that passwords are equal
    if (password !== password_confirmation) {
        userData.error = "Passwords must match."
        return res.status(400).render("signup", userData)
    }
    // check validation for user
    const { error, value } = registerValidation({ username, email, password })
    if (error) {
        userData.error = error.details[0].message
        return res.status(400).render("signup", userData)
    }

    // if we make it this far, user data is valid
    // check that email doesn't already exist
    const emailExist = await User.findOne({ email })
    if (emailExist) {
        userData.error = "Email already exists."
        return res.status(400).render("signup", userData)
    }
    // check that username doesn't already exist
    const usernameExist = await User.findOne({ username })
    if (usernameExist) {
        userData.error = "Username already exists."
        return res.status(400).render("signup", userData)
    }

    // create new user
    const user = new User(value)
    try {
        //save new user
        const saved = await user.save()

        req.session.user = saved
        res.redirect("/dashboard")
    } catch (err) {
        userData.error = err.details[0].message
        return res.status(400).render("signup", userData)
    }
})

module.exports = router;