<script setup>
import CardTrip from '@/components/CardTrip.vue';
import Pagination from '@/components/Pagination.vue';

</script>
<template>
        <div class="border border-gray-100 shadow-sm bg-white w-full h-full flex flex-col">
        <p class="text-custom-black text-3xl mx-14 mt-10 font-semibold">Trip</p>
        <hr class="border border-gray-300 mx-14 my-8" />
        <div class="flex flex-wrap gap-10 px-14 pb-10 w-full flex-1">
            <CardTrip v-for="value in source" :key="value.id" :title="value.title" :price="value.price" :date="value.date" :id="value.id" :status="value.status" />
        </div>
        <div class="w-full justify-center mt-4 mb-10 flex items-end">
            <Pagination />
        </div>
    </div>
</template>