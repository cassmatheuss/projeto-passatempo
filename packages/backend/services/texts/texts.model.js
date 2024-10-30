const mongoose = require('mongoose')

const Text = mongoose.model('Text', mongoose.Schema({
    _id: String,
    text: String
}));

module.exports = Text;