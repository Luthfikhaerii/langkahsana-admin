<script setup>
import { ref } from "vue"
import { QuillEditor } from "@vueup/vue-quill"
import "@vueup/vue-quill/dist/vue-quill.snow.css"
import { useFetch } from "@/composables/useFetch"
import { supabase } from "@/utils/supabase"

const { data, fetchData, error } = useFetch()

const article = ref({
    image: null,
    title: "",
    date: "",
    description: "",
    content: []
})


// add block
function addBlock() {
    article.value.content.push({ type: "text", value: "" })
}

// remove block
function removeBlock(index) {
    article.value.content.splice(index, 1)
}

// handle content image upload
async function onContentImageChange(e, index) {
    const file = e.target.files[0]
    if (file) {
        const filename = `article/${Date.now()}-${e.target.files[0].name}`
        const { error } = await supabase.storage.from("Langkahsana").upload(filename, e.target.files[0])
        if (!error) {
            const { data: url } = supabase.storage.from('Langkahsana').getPublicUrl(filename)
            article.value.content[index].value = url.publicUrl
        }
    }
}

const onImageChange = async (e) => {
    console.log(e)
    if (e.target.files[0]) {
        const filename = `article/${Date.now()}-${e.target.files[0].name.replace(/\s+/g, "-")}`
        const file = e.target.files[0]
        const { error } = await supabase.storage.from("images").upload(filename, file)
        if (!error) {
            const { data: url } = supabase.storage.from('images').getPublicUrl(filename)
            article.value.image = url.publicUrl
        }
    }
}

const onSubmit = async () => {
    await fetchData("/article", {
        method: "POST",
        body: JSON.stringify({
            image: article.image.value,
            title: article.title.value,
            date: article.date.value,
            description: article.description.value,
            content: article.content.value
        })
    })
    if (data.success) {
        alert(data.message)
    }
    if (error) {
        alert(error.message)
    }
}


</script>
<template>
    <div class="border border-gray-100 shadow-sm bg-white w-full h-full ">
        <p class="text-custom-black text-3xl mx-14 mt-10 font-semibold">Create Article</p>
        <hr class="border border-gray-300 mx-14 my-8" />
        <div class="gap-10 px-14 pb-10 w-full">
            <form @submit.prevent="onSubmit" class="space-y-6 mb-8">
                
                <!-- Upload cover image -->
                <div>
                    <label class="block text-lg font-medium mb-1">Cover Image</label>
                    <div v-if="article.image" class="my-4">
                        <img :src="article.image" alt="Preview" class="w-32 h-32 object-cover rounded-lg border" />
                    </div>
                    <input type="file" @change="onImageChange" accept="image/*"
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
                <QuillEditor v-model="article.description" content-type="html" theme="snow"
                    class="bg-white rounded-lg border border-gray-300 shadow" />

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