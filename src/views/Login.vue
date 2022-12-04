<template>
  <div>
    <div class="h-screen w-screen">
      <div class="container text-center mx-auto">
        <div class="mx-auto m-44">
          <form action="" class="">
            <span class="text-2xl font-semibold">
              Student Information System
            </span>
            <div class="mt-4">
              <div class="flex flex-row justify-center">
                <h1>Username:</h1>
                <input aria-label="username" v-model="username" class="ml-2 border border-black" type="text"/>
              </div>
              <div class="flex flex-row justify-center mt-2">
                <h1>Password:</h1>
                <input aria-label="pass" v-model="password" class="ml-3 border border-black" type="password"/>
              </div>
            </div>
            <div class="flex justify-center mt-4">
              <input aria-label="remember-me" v-model="rememberMe" type="checkbox">
              <p class="ml-2">Remember Me</p>
            </div>
            <div class="mt-2">
              <button v-on:click="login" class="bg-gray-300 border border-black w-32">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import '@/assets/tailwind.css'

export default {
  name: 'LoginView',
  data () {
    return {
      username: '',
      password: '',
      rememberMe: false,
      showHome: false
    }
  },
  inject: ['auth'],
  methods: {
    login: function () {
      this.auth(this.username, this.password)
    }
  }
}
</script>
