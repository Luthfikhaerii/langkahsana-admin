<script setup lang="ts">
import {defineProps} from 'vue';
import { useRouter } from 'vue-router';

const {id,title,date,description,image} = defineProps(['id','title','date','description','content','image'])
const router = useRouter()

</script>
<template>
    <div class="w-64 h-88 border border-gray-200 shadow-lg rounded-lg flex flex-col">
        <img :src="image" alt="foto" class="rounded-t-lg w-64 h-44"/>
        <p class="font-bold text-base line-clamp-2 px-4 mt-2 mb-1">{{ title }}</p>
        <p class="text-xs text-gray-600 mb-2 px-4">{{ date }}</p>
        <p class="line-clamp-2 text-xs px-4">{{ description }}</p>
        <div class="flex-1 flex items-end">
            <div class="w-full flex p-4 justify-between">
            <a @click="router.push('/edit/'+id)" class="px-4 w-20 text-center py-2 bg-blue-500 rounded-lg text-xs text-white">
                Edit
            </a>
            <a href="#" class="px-4 w-20 text-center py-2 bg-red-500 rounded-lg text-xs text-white">
                Delete
            </a>
        </div>
        </div>
    </div>
</template>