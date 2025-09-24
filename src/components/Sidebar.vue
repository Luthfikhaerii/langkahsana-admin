<script setup>
import Article from '@/assets/article.svg';
import ArticleWhite from '@/assets/article-white.svg';
import Participant from '@/assets/participant.svg';
import ParticipantWhite from '@/assets/participant-white.svg';
import Trip from '@/assets/trip.svg';
import TripWhite from '@/assets/trip-white.svg';
import Logout from '@/assets/logout.svg'
import LogoutWhite from '@/assets/logout-white.svg'
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { env } from '@/config/env';
import { useAuth } from '@/composables/useAuth';

const route = useRoute()
const router = useRouter()
const isHover = ref(false)
const {logout} = useAuth()



</script>
<template>
    <div class="w-68 border-r border-gray-100 fixed min-h-screen bg-white">
        <p class="text-2xl text-center font-bold mt-8">LANGKAHSANA</p>
        <div class="w-full mt-10 px-4">
            <div :class="['mb-2 px-6 py-3 items-center flex rounded-2xl cursor-pointer', route.path == '/' || route.path == '/add' || (route.params.id && route.path == '/') ? 'bg-langkahsana-green text-white' : 'text-custom-black']"
                @click="router.push('/')">
                <img :src="route.path == '/' ? ArticleWhite : Article" alt="icon" class=" w-5 h-5" />
                <p class="text-lg ml-4 ">Artikel</p>
            </div>
            <div :class="['mb-2 px-6 py-3 items-center flex rounded-2xl cursor-pointer', route.path.startsWith('/trip') ? 'bg-langkahsana-green text-white' : 'text-custom-black']"
                @click="router.push('/trip')">
                <img :src="route.path.startsWith('/trip') ? TripWhite : Trip" alt="" class=" w-5 h-5" />
                <p class="text-lg ml-4">Trip</p>
            </div>
            <div :class="['mb-2 px-6 py-3 items-center flex rounded-2xl cursor-pointer', route.path.startsWith('/participant') ? 'bg-langkahsana-green text-white' : 'text-custom-black']"
                @click="router.push('/participant')">
                <img :src="route.path.startsWith('/participant') ? ParticipantWhite : Participant" alt=""
                    class="w-[20px] h-[20px]" />
                <p class="text-lg ml-4">Participant</p>
            </div>
            <div v-on:click="logout" :class="['mb-2 px-6 py-3 items-center flex rounded-2xl cursor-pointer', 'hover:bg-red-600 hover:text-white', 'text-custom-black']" @mouseenter="isHover = true" @mouseleave="isHover = false" @click="">
                <img :src="isHover == true ?LogoutWhite:Logout" alt="logout" class="w-5 h-5 ml-[2px] cursor-pointer" />
                <p class="text-lg ml-[15px]">Logout</p>
            </div>
        </div>

    </div>
</template>