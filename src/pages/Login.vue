<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()

const handleLogin = async () => {
  try{
    const res = await fetch(import.meta.env.VITE_API_URL+'/user/login',{
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify({
            email,password
        })
    })
    const status = await res.json()
    if(status.success){
        router.replace('/')
    }
  }catch(err){
    console.log(err)
  }
}
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-white absolute z-30 w-full top-0 left-0 grid grid-cols-2"
  >
  
  <div>
    <!-- Overlay gelap biar teks lebih jelas -->
    <div class="absolute inset-0"></div>

    <div 
      class="relative bg-white/90 backdrop-blur-md rounded-2xl  w-full  px-24 z-10"
    >
    <div class="mb-4">
      <h2 class="text-4xl font-bold text-gray-800 mb-6">
        Sign In Admin
      </h2>
      <p class="text-gray-600 mt-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt in qui numquam tempore sapiente itaque!
      </p>
    </div>


      <form @submit.prevent="handleLogin" class="space-y-6">
        <!-- Email -->
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            id="email"
            type="email"
            v-model="email"
            placeholder="Enter your email"
            class="mt-1 block w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm p-3"
          />
        </div>

        <!-- Password -->
        <div>
          <label
            for="password"
            class="block text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            id="password"
            type="password"
            v-model="password"
            placeholder="Enter your password"
            class="mt-1 block w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm p-3"
          />
        </div>

        <!-- Tombol -->
        <button
          type="submit"
          class="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition mt-4"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
  <img src="/bg.jpg" class="h-full w-full"/>
  </div>
</template>