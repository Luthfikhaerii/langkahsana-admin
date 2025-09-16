<script setup lang="ts">
import {defineProps} from 'vue';
import { useRouter } from 'vue-router';

const {id,title,date,price,status,image} = defineProps(['id','title','date','price','status','image'])
const router = useRouter()

</script>
<template>
    <div class="w-64 h-88 border border-gray-200 shadow-lg rounded-lg flex flex-col">
        <img :src="image" alt="foto" class="rounded-lg w-60 h-44 m-auto mt-2" />
        <p class="font-bold text-sm line-clamp-2 px-4 mt-3 mb-1">{{ title }}</p>
        <p class="text-xs text-gray-600 mb-2 px-4">{{ date }}</p>
        <div class="flex w-full justify-between px-4 mb-2 items-center">
            <p class="text-sm font-bold text-blue-400">Rp{{ price }}</p>
            <p class="text-sm font-bold">{{ status }}</p>
        </div>
        <div class="flex-1 flex items-end">
            <div class="w-full flex px-4 pb-4 justify-between">
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