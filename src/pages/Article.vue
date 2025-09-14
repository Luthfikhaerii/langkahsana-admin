<script setup>
import Card from '@/components/Card.vue'
</script>
<template>
    <div class="border border-gray-100 shadow-sm bg-white w-full h-full ">
        <p class="text-custom-black text-3xl mx-8 mt-8 font-semibold">Article</p>
        <hr class="border border-gray-300 mx-8 my-8"/>
        <div class="flex flex-wrap gap-4 px-6 pb-10 w-full">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>

      </div>
</template>