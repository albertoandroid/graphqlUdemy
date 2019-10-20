const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    name: String,
    language: String,
    date: String
})

const Course = mongoose.model('course', courseSchema)

module.exports = Course