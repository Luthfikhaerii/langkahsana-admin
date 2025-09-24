<script setup>
import Sidebar from '@/components/Sidebar.vue';
import { useAuth } from '../composables/useAuth';
import { onMounted } from 'vue';

const {user, check } = useAuth()

onMounted(() => {
    check()
})
</script>

<template>
  <div class="flex min-h-screen ">
    <Sidebar />
    <div class="bg-gray-50 w-full h-min-screen p-6 ml-68">
      <router-view />
    </div>
  </div>
</template>