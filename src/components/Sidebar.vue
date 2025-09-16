<script setup>
import Article from '@/assets/article.svg';
import ArticleWhite from '@/assets/article-white.svg';
import Participant from '@/assets/participant.svg';
import ParticipantWhite from '@/assets/participant-white.svg';
import Trip from '@/assets/trip.svg';
import TripWhite from '@/assets/trip-white.svg';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

</script>
<template>
    <div class="w-68 border-r border-gray-100 fixed min-h-screen bg-white">
        <p class="text-xl text-center font-bold mt-8">LANGKAHSANA</p>
        <div class="w-full mt-10 px-4">
            <di :class="['mb-2 px-6 py-3 items-center flex rounded-2xl cursor-pointer', route.path == '/' ||  route.path == '/add' || (route.params.id && route.path == '/') ? 'bg-langkahsana-green text-white' : 'text-custom-black']"
                @click="router.push('/')">
                <img :src="route.path == '/' ? ArticleWhite : Article" alt="icon" class=" w-4 h-4" />
                <p class="ml-4 ">Artikel</p>
            </di>
            <di
                :class="['mb-2 px-6 py-3 items-center flex rounded-2xl cursor-pointer', route.path.startsWith('/trip') ? 'bg-langkahsana-green text-white' : 'text-custom-black']" @click="router.push('/trip')">
                <img :src="route.path.startsWith('/trip') ? TripWhite : Trip" alt="" class=" w-4 h-4" />
                <p class="ml-4">Trip</p>
            </di>
            <di
                :class="['mb-2 px-6 py-3 items-center flex rounded-2xl cursor-pointer', route.path.startsWith('/participant') ? 'bg-langkahsana-green text-white' : 'text-custom-black']" @click="router.push('/participant')">
                <img :src="route.path.startsWith('/participant') ? ParticipantWhite : Participant" alt="" class="w-[18px] h-[18px]" />
                <p class="ml-3">Participant</p>
            </di>
        </div>

    </div>
</template>