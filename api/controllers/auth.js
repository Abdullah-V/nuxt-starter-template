const User = require('../models/user.js')
const helper = require('../helper.js')

module.exports = {
  async login(req, res) {
    const authData = await req.body.authData
    const user = await User.findOne({
      username: authData.username.toLowerCase().trim()
    })

    if (!user) {
      res.clearCookie('sessionId').send({
        success: false,
        message: 'Username or password is wrong.',
        data: null
      }) // User not found
      return false
    }

    const isPasswordsMatch = await helper.comparePasswords(
      authData.password,
      user.password
    )

    if (!isPasswordsMatch) {
      res.clearCookie('sessionId').send({
        success: false,
        message: 'Username or password is wrong',
        data: null
      }) // Password is wrong
      return false
    }

    const newSessionId = helper.getRandomSessionId()
    await User.findOneAndUpdate(
      {
        username: authData.username.toLowerCase().trim()
      },
      { sessionId: newSessionId }
    )

    res
      .cookie('sessionId', newSessionId, {
        expires: new Date(Date.now() + Number(process.env.SESSION_ID_EXPIRES))
      })
      .send({ success: true, message: '', data: user })
    return true
  },

  async register(req, res) {
    const authData = await req.body.authData
    authData.username = await authData.username.toLowerCase().trim()

    const isUserExists = await helper.isUserExists(authData.username)
    if (isUserExists || !authData.username || authData.password.length < 8) {
      res.clearCookie('sessionId').send({
        success: false,
        message: 'Username is already taken',
        data: null
      }) // This username is already taken or username or password is empty.
      return false
    }

    const hash = await helper.hashPassword(authData.password)
    authData.password = hash
    const newUser = await User.create({
      ...authData,
      sessionId: helper.getRandomSessionId()
    })
    res
      .cookie('sessionId', newUser.sessionId, {
        expires: new Date(Date.now() + Number(process.env.SESSION_ID_EXPIRES))
      })
      .send({ success: true, message: '', data: newUser })
    return true
  },

  async logout(req, res) {
    await User.findOneAndUpdate(
      { sessionId: req.cookies.sessionId },
      { sessionId: '' }
    )
    res
      .clearCookie('sessionId')
      .send({ success: true, message: '', data: null })
  }
}
