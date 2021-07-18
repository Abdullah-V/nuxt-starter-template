<script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    }
  }
</script>

<template>
  <div>
    <input v-model.trim="username" type="text" placeholder="username" />
    <input v-model.trim="password" type="text" placeholder="password" />
    <button
      @click="
        $store.dispatch('login', {
          username,
          password
        })
      "
    >
      Login
    </button>

    <button
      @click="
        $store.dispatch('register', {
          username,
          password
        })
      "
    >
      Register
    </button>

    <button @click="$store.dispatch('logout')">Logout</button>

    <span v-if="$store.state.me">{{ $store.state.me.username }}</span>

  </div>
</template>

<style scoped>
  div {
    margin: 50px;
  }

  button {
    padding: 10px 30px;
    background: rgb(23, 53, 221);
    color: white;
  }

  input {
    display: block;
    margin: 20px 0;
    border: 2px solid black;
    padding: 15px 20px;
  }
</style>
