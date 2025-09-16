<script setup lang="ts">
import RowParticipant from '@/components/RowParticipant.vue';
import Pagination from '@/components/Pagination.vue';
import { onMounted,ref } from 'vue';

const data = ref<any>([])

onMounted(async()=>{

})
</script>
<template>
    <div class="border border-gray-100 shadow-sm bg-white w-full h-full flex flex-col">
        <p class="text-custom-black text-3xl mx-14 mt-10 font-semibold">Participant</p>
        <hr class="border border-gray-300 mx-14 my-8" />
        <div class="gap-10 px-14 pb-10 w-full flex-1">
            <RowParticipant v-for="value in data" :key="value.id" :id="value.id" :title="value.title" :date="value.date" :status="value.status" :participant="value.participant"/>
        </div>
        <div class="w-full justify-center mt-4 mb-10 flex items-end">
            <Pagination />
        </div>
    </div>
</template>