const mongoose = require('mongoose')

const TripSchema = new mongoose.Schema({
    post: {
        required: true,
        type: String,
        minlength: 1,
        maxlength: 3000
    },
    location: {
        required: true,
        type: String,
        default: "Somewhere, USA",
        minlength: 2,
        maxlength: 255
    },
    image: {
        filename: {
            type: String
        },
        path: {
            type: String
        }
    },
    owner_id: {
        type: String,
        required: true,
    }
})


module.exports = mongoose.model('Trip', TripSchema)