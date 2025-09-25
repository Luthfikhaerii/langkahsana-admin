<script setup lang="ts">
import {defineProps} from 'vue';
import { useRouter } from 'vue-router';
import DOMPurify from 'dompurify';
import { ref } from 'vue';

const {id,title,date,description,image} = defineProps(['id','title','date','description','image'])
const safehtml = ref(DOMPurify.sanitize(description))
const router = useRouter()

</script>
<template>
    <div class="w-64 h-88 border border-gray-200 shadow-lg rounded-xl flex flex-col">
        <img :src="image" alt="foto" class="rounded-xl w-64 h-48"/>
        <p class="text-[10px] text-gray-600 px-4 mt-4">{{ new Date(date).toLocaleDateString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) }}</p>
        <p class="font-bold text-base line-clamp-2 px-4 my-1">{{ title }}</p>
        
        <p class="line-clamp-2 text-xs px-4" v-html="safehtml"></p>
        <div class="flex-1 flex items-end">
            <div class="w-full flex p-4 justify-between">
            <a @click="router.push('/'+id)" class="px-4 w-20 text-center py-2 bg-blue-500 rounded-lg text-xs text-white">
                Edit
            </a>
            <a href="#" class="px-4 w-20 text-center py-2 bg-red-500 rounded-lg text-xs text-white">
                Delete
            </a>
        </div>
        </div>
    </div>
</template>