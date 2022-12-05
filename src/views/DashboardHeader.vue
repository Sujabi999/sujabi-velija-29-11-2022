<template>
  <div class="border border-black h-28 p-4 mt-2">
    <div class="flex flex-row justify-between">
      <div class="flex flex-row mt-6 items-center">
        <font-awesome-icon icon="fa-solid fa-users" />
        <p class="ml-4">Student Information System</p>
      </div>
      <div class="grid grid-rows-2 mt-2.5">
        <div class="flex flex-row items-center">
          <font-awesome-icon class="mr-2" icon="fa-solid fa-user" />
          <div>Sujabi Velija</div>
        </div>
        <div class="ml-6">
          <span class="cursor-pointer text-blue-500 border-b border-b-blue-500" v-on:click="logout">Logout</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardHeader',
  inject: ['callLogout'],
  methods: {
    logout: function () {
      this.callLogout()
    }
  }
}
</script>
