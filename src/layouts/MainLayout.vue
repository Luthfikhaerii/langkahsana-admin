<script setup>
import Sidebar from '@/components/Sidebar.vue';
import { useAuth } from '../composables/useAuth';
import { onMounted,ref } from 'vue';
import { useRouter } from 'vue-router';
import {env} from '../config/env'

const router = useRouter()
const auth = ref(false)
const error = ref(null)

onMounted(async () => {
  if (!auth.value) {
    try {
      const res = await fetch(env.apiUrl + "/user/auth", {
        credentials: 'include'
      })
      const json = await res.json()
      console.log(json)
      if (json.data.role == 'admin') {
        auth.value = true
      }
    } catch (err) {
      router.push('/login')
    }
    
  }
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