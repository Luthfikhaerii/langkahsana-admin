<script setup>
import { useAuth } from '@/composables/useAuth'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const {login} = useAuth()

</script>

<template>
  <div class="min-h-screen items-center justify-center absolute  w-full grid grid-cols-3">

    <div class="bg-white col-span-1 w-full">

        <div class="p-20">
          <div class="mb-4">
            <h2 class="text-4xl font-bold text-gray-800 mb-6">
              Sign In Admin
            </h2>
          </div>
          <form @submit.prevent="login({email,password})" class="space-y-6">
            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input id="email" type="email" v-model="email" placeholder="Enter your email"
                class="mt-1 block w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm p-3" />
            </div>

            <!-- Password -->
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <input id="password" type="password" v-model="password" placeholder="Enter your password"
                class="mt-1 block w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm p-3" />
            </div>

            <!-- Tombol -->
            <button type="submit"
              class="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition mt-4">
              Sign In
            </button>
          </form>
        </div>
    </div>
    <div class="w-full h-full bg-[url('/bg.jpg')] bg-cover col-span-2 flex justify-center items-center">
      <div class="">
        <p class="text-5xl font-bold text-white">LANGKAHSANA</p>
      </div>
    </div>
  </div>
</template>