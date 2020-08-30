const router = express = require('express').Router()

router.get('/', (req, res) => {
    req.session = null
    res.redirect('../')
})


module.exports = router;