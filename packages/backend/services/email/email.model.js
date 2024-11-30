const mongoose = require('mongoose')

const Email = mongoose.model('Email', mongoose.Schema({
    _id: String,
    email: String
}));

module.exports = Email;