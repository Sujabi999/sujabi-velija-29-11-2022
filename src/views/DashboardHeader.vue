<template>
  <div class="border border-black h-28 p-4 mt-2">
    <div class="flex flex-row justify-between">
      <p class="ml-10 mt-6">Student Information System</p>
      <div class="grid grid-rows-2 mt-2.5">
        <div>Sujabi Velija</div>
        <div>
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
