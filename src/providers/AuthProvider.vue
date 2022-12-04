<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    authenticate: function () {
      const token = localStorage.getItem('token')
      if (token) {
        if (this.$route.path === '/login') {
          this.$router.push('/')
        }
      } else {
        if (this.$route.path !== '/login') {
          this.$router.push('/login')
        }
      }
    }
  },
  provide: {
    auth: function (username, password) {
      alert(`Username: ${username} , Password: ${password}`)
      // Call to backend to get token for authentication,
      localStorage.setItem('token', 'authtoken')
      this.$router.push('/')
    },
    callLogout: function () {
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  },
  watch: {
    $route () {
      this.authenticate()
    }
  },
  created () {
    this.authenticate()
  }
}
</script>
<template>
  <div>
    <slot />
  </div>
</template>
