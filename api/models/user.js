const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  sessionId: String
})

module.exports = mongoose.model('User', userSchema)
