const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: String
})

const User = mongoose.model('user', userSchema)

module.exports = User