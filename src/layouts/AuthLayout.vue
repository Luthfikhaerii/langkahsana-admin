<script setup lang="ts">
import { useAuth } from '../composables/useAuth';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const {user} = useAuth()
const router = useRouter()

onMounted(async () => {
  if (!user?.email&&user?.role!=='admin') {
    router.push('/login')
  }})
</script>
<template>


</template>