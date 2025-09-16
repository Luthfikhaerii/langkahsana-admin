<script setup lang="ts">
import RowParticipant from '@/components/RowParticipant.vue';
import { onMounted,ref } from 'vue';

const data = ref<any>([])

onMounted(async()=>{

})
</script>
<template>
    <div class="border border-gray-100 shadow-sm bg-white w-full h-full ">
        <p class="text-custom-black text-3xl mx-14 mt-10 font-semibold">Participant</p>
        <hr class="border border-gray-300 mx-14 my-8" />
        <div class="gap-10 px-14 pb-10 w-full">
            <RowParticipant v-for="value in data" :key="value.id" :id="value.id" :title="value.title"/>
        </div>
    </div>
</template>