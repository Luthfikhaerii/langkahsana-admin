<script setup lang="ts">
import Card from '@/components/Card.vue'
import Pagination from '@/components/Pagination.vue';
import { ref, onMounted, watch } from 'vue';
import { useFetch } from '@/composables/useFetch';

const { data, fetchData, error } = useFetch()
const page = ref(1)
const limit = ref(12)

function changePage(page: any) {
    console.log("Page changed to:", page)
    page.value = page

}

watch([page], async () => {
    await fetchData(`/article?page=${page.value}&limit=${limit.value}`)
    if (error.value) {
        alert(error.value.message)
    }
    if (data.value) {
        console.log(data.value)
    }
}, {
    immediate: true
})

</script>
<template>
    <div class="border border-gray-100 shadow-sm bg-white w-full h-full flex  flex-col">
        <p class="text-custom-black text-3xl mx-14 mt-10 font-semibold">Article</p>
        <hr class="border border-gray-300 mx-14 my-8" />
        <button @click="$router.push('/add')"
            class="bg-blue-600 shadow-sm mx-14 text-white px-4 py-2 rounded-lg mx-10 mb-6 w-40 text-sm">+ Add New
            Article</button>
        <div class="flex flex-1 flex-wrap gap-10 px-14 pb-10 w-full">
            <Card v-for="value in data?.data" :key="value.id" :title="value.title" :description="value.description"
                :date="value.date" :id="value.id" :image="value.image" />
        </div>
        <div v-if="data" class="w-full justify-center mt-4 mb-10 flex items-end">
            <vue-awesome-paginate :total-items="data?.total" :items-per-page="12" :max-pages-shown="3" v-model="page"
                :on-click="changePage" />
        </div>

    </div>
</template>

<style>
  .pagination-container {
    display: flex;

    column-gap: 10px;
  }

  .paginate-buttons {
    height: 40px;

    width: 40px;

    border-radius: 2px;

    cursor: pointer;

    background-color: rgb(242, 242, 242);

    border: 1px solid rgb(217, 217, 217);

    color: black;
  }

  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }

  .active-page {
    background-color: #3498db;

    border: 1px solid #3498db;

    color: white;
  }

  .active-page:hover {
    background-color: #2988c8;
  }
</style>