const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: string
})

const User = mongoose.model('user', userSchema)

module.exports = User