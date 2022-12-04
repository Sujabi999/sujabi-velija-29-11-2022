<template>
  <div id="app" class="p-4">
    <AuthProvider>
      <HkHeader v-if="isLoggedIn"/>
      <RouterView/>
    </AuthProvider>
  </div>
</template>
<script>
import AuthProvider from '@/providers/AuthProvider'
import HkHeader from '@/components/HkHeader'
export default {
  components: { HkHeader, AuthProvider },
  data () {
    return {
      isLoggedIn: false
    }
  },
  methods: {
    checkLogin: function () {
      if (location.pathname === '/login') {
        this.isLoggedIn = false
      } else this.isLoggedIn = true
    }
  },
  watch: {
    $route: function () {
      this.checkLogin()
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>
