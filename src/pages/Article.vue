<script setup lang="ts">
import Card from '@/components/Card.vue'
import Pagination from '@/components/Pagination.vue';
import { ref, onMounted } from 'vue';
import { useFetch } from '@/composables/useFetch';

const { data, fetchData, error } = useFetch()

onMounted(async () => {
    await fetchData(`/article?page=${1}&limit=${12}`)
    if (error.value) {
        alert(error.value.message)
    }
    if(data.value){
        console.log(data.value)
    }
})

</script>
<template>
    <div class="border border-gray-100 shadow-sm bg-white w-full h-full flex  flex-col">
        <p class="text-custom-black text-3xl mx-14 mt-10 font-semibold">Article</p>
        <hr class="border border-gray-300 mx-14 my-8" />
        <div class="flex flex-1 flex-wrap gap-10 px-14 pb-10 w-full">
            <Card v-for="value in data?.data" :key="value.id" :title="value.title" :description="value.description" :date="value.date" :id="value.id"
                :image="value.image" />
        </div>
        <div class="w-full justify-center mt-4 mb-10 flex items-end">
            <Pagination />
        </div>

    </div>
</template>