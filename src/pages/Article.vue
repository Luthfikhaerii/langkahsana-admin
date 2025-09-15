<script setup lang="ts">
import Card from '@/components/Card.vue'
import Pagination from '@/components/Pagination.vue';
import { ref,onMounted } from 'vue';

const data = ref<any>([])

onMounted(async()=>{
    const res:Response = await fetch("/")
    data.value = res.json() 
})

</script>
<template>
    <div class="border border-gray-100 shadow-sm bg-white w-full h-full ">
        <p class="text-custom-black text-3xl mx-14 mt-10 font-semibold">Article</p>
        <hr class="border border-gray-300 mx-14 my-8"/>
        <div  class="flex flex-wrap gap-10 px-14 pb-10 w-full">
          <Card v-for="(value,idx) in data" :key="value.id" :title="value.title"/>
        </div>
        <Pagination/>
      </div>
</template>