const bcrypt = require('bcrypt')
const uuid = require('uuid');
const User = require('./models/user.js')

module.exports = {
  checkApiKey(key) {
    return process.env.API_KEY === key
  },
  hashPassword(rawPassword) {
    const saltRounds = 10
    return bcrypt.hash(rawPassword, saltRounds)
  },
  comparePasswords(rawPassword, hash) {
    return bcrypt.compare(rawPassword, hash)
  },
  async isUserExists(username) {
    const count = await User.countDocuments({ username }).exec()
    return count > 0
  },
  getRandomSessionId() {
    return uuid.v4()
  }
}
