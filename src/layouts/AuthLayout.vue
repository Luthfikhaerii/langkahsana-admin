<script setup lang="ts">
import { useAuth } from '@/composables/useAuth';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const auth = useAuth()
const router = useRouter()

onMounted(async () => {
  console.log(auth)
  if (!auth) {
    router.push('/login')
  }})
</script>
<template>


</template>