<script setup lang="ts">
import {defineProps} from 'vue';
import { useRouter } from 'vue-router';
import DOMPurify from 'dompurify';
import { ref } from 'vue';
import { useFetch } from '@/composables/useFetch';

const {id,title,date,description,image} = defineProps(['id','title','date','description','image'])
const safehtml = ref(DOMPurify.sanitize(description))
const router = useRouter()

const {error,fetchData,data} = useFetch()

const onDelete = async () => {
    await fetchData('/article/'+`${id}`, {
        method: 'DELETE',
    })
    if(error.value){
        console.log(error.value)
    } 
    if(data.value){ 
        alert(data.value.message)
        router.push('/')
    }
}

</script>
<template>
    <div class="w-64 h-96 border border-gray-200 shadow-lg rounded-xl flex flex-col">
        <img :src="image" alt="foto" class="rounded-xl w-64 h-48"/>
        <p class="text-[10px] text-gray-600 px-4 mt-4">{{ new Date(date).toLocaleDateString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric" }) }}</p>
        <p class="font-bold text-base line-clamp-2 px-4 mt-2 leading-5">{{ title }}</p>
        
        <p class="line-clamp-2 text-xs px-4 mt-2" v-html="safehtml"></p>
        <div class="flex-1 flex items-end">
            <div class="w-full flex m-4 justify-between">
            <a @click="router.push('/'+id)" class="px-4 w-20 text-center py-2 bg-blue-500 rounded-lg text-xs text-white">
                Edit
            </a>
            <a @click="onDelete" class="px-4 w-20 text-center py-2 bg-red-500 rounded-lg text-xs text-white">
                Delete
            </a>
        </div>
        </div>
    </div>
</template>