<script>
  export default {
    created() {
      // this.$store.dispatch('me')
      if (process.client) {
        if (
          window.location.href.startsWith('http://') &&
          !process.env.BASE_URL.startsWith('http://')
        ) {
          window.location.href = window.location.href.replace(
            'http://',
            'https://'
          )
        }
      }
    }
  }
</script>

<template>
  <div>
    <Nuxt />
  </div>
</template>

<style></style>
