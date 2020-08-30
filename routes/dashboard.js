const router = require('express').Router();
const User = require('../models/User')

router.get('/', async (req, res) => {
    if (!req.session.user) { return res.redirect('../') }
    const user = req.session.user
    return res.render("dashboard", { user })
})

module.exports = router