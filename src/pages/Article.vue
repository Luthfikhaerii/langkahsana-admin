<script setup>
import Card from '@/components/Card.vue'
</script>
<template>
    <div class="border border-gray-100 shadow-sm bg-white w-full h-full ">
        <p class="text-custom-black text-3xl mx-14 mt-10 font-semibold">Article</p>
        <hr class="border border-gray-300 mx-14 my-8"/>
        <div class="flex flex-wrap gap-10 px-14 pb-10 w-full">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>

      </div>
</template>