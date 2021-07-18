export default {
  login(context, payload) {
    if (payload.username.trim() === '' || payload.password.length < 8) {
      return false
    }
    this.$axios
      .$post('/auth/login', {
        authData: {
          ...payload
        }
      })
      .then((data) => {
        // console.log(data)
        if (data.success) {
          context.state.me = data.data
          return data
        }
        context.state.me = {}
        return data.message
      })
      .catch()
  },

  register(context, payload) {
    if (payload.username.trim() === '' || payload.password.length < 8) {
      return
    }
    this.$axios
      .$post('/auth/register', {
        authData: {
          ...payload
        }
      })
      .then((data) => {
        // console.log(data)
        if (data.success) {
          context.state.me = data.data
          return data
        }
        context.state.me = {}
        return data.message
      })
      .catch()
  },

  logout(context) {
    this.$axios.$post('/auth/logout')
    context.state.me = {}
  },

  me(context) {
    this.$axios.$get('/user/me').then((data) => {
      context.state.me = data.data
      // console.log(data)
    })
  }
}
