const router = require('express').Router();

const Trip = require('../models/Trip')
const { tripValidation } = require('../validations/tripValidation')

router.get('/', async (req, res) => {
    if (!req.session.user) { return res.redirect('../') }
    const user = req.session.user
    const trips = await Trip.find({ owner_id: user._id })
    return res.render("dashboard", { user, trips })
})

router.post('/trips', async (req, res) => {
    const user = req.session.user
    const data = {
        ...req.body,
        image: {
            path: req.file ? req.file.path : null,
            filename: req.file ? req.file.filename : null
        },
        owner_id: user._id
    }

    const { error, value } = tripValidation(data)
    if (error) {
        return res.render("dashboard", { user, error: "Oops! Something went wrong... please try again later." })
    }
    const trip = new Trip(value)
    try {
        const savedTrip = await trip.save()
    } catch (err) {
        console.log(err)
    }
    return res.redirect('./')
})
module.exports = router