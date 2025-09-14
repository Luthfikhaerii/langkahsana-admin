<script setup>
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div class="flex min-h-screen ">
    <Sidebar/>
    <div class="bg-gray-50 w-full h-min-screen p-6">
      <router-view/>
    </div>
  </div>
</template>

<style scoped>

</style>
