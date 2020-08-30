const mongoose = require('mongoose')

const TripSchema = new mongoose.Schema({
    destination: {
        required: true,
        city: {
            type: String,
            default: "Somewhere",
            minlength: 2,
            maxlength: 255
        },
        state: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 255
        }
    },
    owner_id: {
        type: String,
        required: true,

    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model('Trip', TripSchema)