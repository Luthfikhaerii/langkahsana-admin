<script setup>
import Article from '@/assets/article.svg';
import ArticleWhite from '@/assets/article-white.svg';
import Participant from '@/assets/participant.svg';
import ParticipantWhite from '@/assets/participant-white.svg';
import Trip from '@/assets/trip.svg';
import TripWhite from '@/assets/trip-white.svg';
</script>
<template>
    <div class="w-72">
        <p class="text-xl text-center font-bold mt-8">LANGKAHSANA</p>
        <div class="w-full mt-10 px-4">
        <di class="mb-4 px-4 py-2 items-center text-gray-400 flex"><img :src="Article" alt="" class=" w-4 h-4"/><p class="ml-4 text-custom-black">Artikel</p></di>
        <di class="mb-4 px-4 py-2 items-center text-gray-400 flex"><img :src="Trip" alt="" class=" w-4 h-4"/><p class="ml-4 text-custom-black">Trip</p></di>
        <di class="mb-4 px-4 py-2 items-center text-gray-400 flex"><img :src="Participant" alt="" class=" w-[18px] h-[18px]"/><p class="ml-3 text-custom-black">Participant</p></di>
        </div>

    </div>
</template>