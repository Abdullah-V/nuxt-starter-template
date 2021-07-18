const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
require('dotenv').config

const helper = require('./helper.js')
const User = require('./models/user.js')

const authRoute = require('./routes/auth.js')
const userRoute = require('./routes/user.js')

app.use(express.json())
app.use(cookieParser())

// Middleware
app.use(async (req, res, next) => {
  if (helper.checkApiKey(req.headers.api_key)) {
    const me = await User.findOne({ sessionId: req.cookies.sessionId }).exec()
    if(!me) {
      res.clearCookie('sessionId')
      next()
      return false
    }
    res.cookie('sessionId', req.cookies.sessionId, {
      expires: new Date(Date.now() + Number(process.env.SESSION_ID_EXPIRES))
    })
    next()
    return true
  }
  res.send({ success: false, message: '', data: null })
  return false
})

app.use('/user', userRoute)
app.use('/auth', authRoute)

mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  () => {
    console.log(`Database connected ${process.env.MONGODB_URL}`)
  }
)

module.exports = app

if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
