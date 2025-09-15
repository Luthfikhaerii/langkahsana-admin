<script setup lang="ts">
import {useRouter} from 'vue-router'

const {id,title,date,status,participant} = defineProps(['id','title','date','status','participant'])

const router = useRouter()

</script>
<template>
    <div @click="router.push('/participant/'+id)" class="w-full h-20 border border-gray-200 shadow-sm rounded-lg flex py-2 justify-between items-center px-8 mb-4 cursor-pointer">
        <div>
            <p class="font-bold text-base line-clamp-2  mb-1">{{title}}</p>
            <p class="text-xs text-gray-600">{{ date }}</p>
        </div>
        <div class="flex flex-col items-end">
            <p class="text-sm font-bold  mb-1">{{status}}</p>
            <p class="text-sm font-semibold">Participant : {{ participant }}</p>
        </div>

    </div>
</template>