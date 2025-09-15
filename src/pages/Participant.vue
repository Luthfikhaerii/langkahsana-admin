<script setup lang="ts">
import RowParticipant from '@/components/RowParticipant.vue';
</script>
<template>
    <div class="border border-gray-100 shadow-sm bg-white w-full h-full ">
        <p class="text-custom-black text-3xl mx-14 mt-10 font-semibold">Participant</p>
        <hr class="border border-gray-300 mx-14 my-8" />
        <div class="gap-10 px-14 pb-10 w-full">
            <RowParticipant id="1"/>
            <RowParticipant id="1" />
            <RowParticipant id="1"/>
            <RowParticipant id="1" />
        </div>
    </div>
</template>