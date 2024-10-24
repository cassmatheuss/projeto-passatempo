const mongoose = require('mongoose')

const User = mongoose.model('User', {
    _id: String,
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: false,
        required: true
    },
    hash: {
        type: String,
        unique: false,
        required: true
    },
    created_at: {
        type: Date,
        unique: false,
        required: true
    }
})

module.exports = User