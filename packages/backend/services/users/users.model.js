const mongoose = require('mongoose')

const User = mongoose.model('User', mongoose.Schema({
    _id: String,
    username: {
        type: String,
        unique: true,
        required: true
    },
    password_hash: {
        type: String,
        unique: false,
        required: true
    },
    created_at: {
        type: Date,
        unique: false,
        required: true
    }
}))

module.exports = User