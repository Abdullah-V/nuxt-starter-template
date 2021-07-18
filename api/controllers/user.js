const User = require('../models/user.js')

module.exports = {
  async me(req, res) {
    const me = await User.findOne({ sessionId: req.cookies.sessionId }).exec()
    if (me) {
      res.send({ success: true, message: '', data: me })
      return me
    }
    res.clearCookie('sessionId').send({ success: false, message: 'User is not defined', data: null })
    return false
  }
}
