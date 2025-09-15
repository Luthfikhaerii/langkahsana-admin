<script setup>
import { ref } from "vue"
import { QuillEditor } from "@vueup/vue-quill"
import "@vueup/vue-quill/dist/vue-quill.snow.css"

const article = ref({
    cover: null,
    title: "",
    date: "",
    description: "",
    content: []
})

// handle cover upload
function onCoverChange(e) {
    const file = e.target.files[0]
    if (file) {
        article.value.cover = URL.createObjectURL(file)
    }
}

// handle content image upload
function onContentImageChange(e, index) {
    const file = e.target.files[0]
    if (file) {
        article.value.content[index].value = URL.createObjectURL(file)
    }
}

// add block
function addBlock() {
    article.value.content.push({ type: "text", value: "" })
}

// remove block
function removeBlock(index) {
    article.value.content.splice(index, 1)
}

// submit
function submitArticle() {
    console.log("Article submitted:", article.value)
}
</script>
<template>
    <div class="border border-gray-100 shadow-sm bg-white w-full h-full ">
        <p class="text-custom-black text-3xl mx-14 mt-10 font-semibold">Create Article</p>
        <hr class="border border-gray-300 mx-14 my-8" />
        <div class="gap-10 px-14 pb-10 w-full">
            <form @submit.prevent="submitArticle" class="space-y-6 mb-8">
                <!-- Upload cover image -->
                <div>
                    <label class="block text-lg font-medium mb-1">Cover Image</label>
                    <div v-if="article.cover" class="my-4">
                        <img :src="article.cover" alt="Preview" class="w-32 h-32 object-cover rounded-lg border" />
                    </div>
                    <input type="file" @change="onCoverChange" accept="image/*"
                        class="block text-sm rounded-lg border border-gray-300 shadow" />

                </div>

                <!-- Title -->
                <div>
                    <label class="block text-lg font-medium mb-1">Title</label>
                    <input v-model="article.title" type="text"
                        class="w-full border border-gray-300 shadow rounded-lg px-3 py-2 text-sm" required />
                </div>

                <!-- Date -->
                <div>
                    <label class="block text-lg font-medium mb-1">Date</label>
                    <input v-model="article.date" type="date"
                        class="w-full border border-gray-300 shadow rounded-lg px-3 py-2 text-sm" required />
                </div>

                <!-- Description -->
                <QuillEditor v-if="block.type === 'text'" v-model:description="block.value" content-type="html"
                                theme="snow" class="bg-white rounded-lg border border-gray-300 shadow" />

                <!-- Dynamic Content -->
                <div>
                    <label class="block text-lg font-medium mb-2">Content</label>
                    <div class="space-y-4">
                        <div v-for="(block, index) in article.content" :key="index"
                            class="p-4 border border-gray-300 shadow rounded-lg bg-gray-50 space-y-2">
                            <!-- Choose type -->
                            <select v-model="block.type"
                                class="border rounded-lg px-2 py-1 text-sm border-gray-300 shadow w-20">
                                <option value="text">Text</option>
                                <option value="image">Image</option>
                            </select>

                            <!-- Text input -->
                            <QuillEditor v-if="block.type === 'text'" v-model:content="block.value" content-type="html"
                                theme="snow" class="bg-white rounded-lg border border-gray-300 shadow" />

                            <!-- Image input -->
                            <div v-else>
                                <input type="file" accept="image/*" @change="e => onContentImageChange(e, index)"
                                    class="text-sm" />
                                <div v-if="block.value" class="mt-2">
                                    <img :src="block.value" alt="Preview"
                                        class="w-32 h-32 object-cover rounded-lg border" />
                                </div>
                            </div>

                            <!-- Remove block -->
                            <button type="button" @click="removeBlock(index)"
                                class="text-xs text-red-500 font-bold">Remove</button>
                        </div>
                    </div>

                    <!-- Add new block -->
                    <button type="button" @click="addBlock"
                        class="mt-3 px-4 py-2 bg-gray-100 rounded-lg text-sm border-gray-500 shadow">
                        + Add Content Block
                    </button>
                </div>

                <!-- Submit -->
                <div class="text-center">
                    <button type="submit" class="px-5 py-2 bg-langkahsana-green text-white rounded-lg text-sm mt-4">
                        Create Article
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>