<template>
  <div>
    <DashboardHeader/>
   <h1>Student View</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import '@/assets/tailwind.css'
import DashboardHeader from '@/views/DashboardHeader'

export default {
  name: 'StudentsView',
  components: { DashboardHeader }
}
</script>
