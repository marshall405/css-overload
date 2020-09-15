const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 1024
    },
    email: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255
    }
})


module.exports = mongoose.model('User', UserSchema)