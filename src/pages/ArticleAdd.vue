<script setup>
import { ref } from "vue"
import { QuillEditor } from "@vueup/vue-quill"
import "@vueup/vue-quill/dist/vue-quill.snow.css"
import { useFetch } from "@/composables/useFetch"
import { supabase } from "@/utils/supabase"
import { useRouter } from "vue-router"

const { data, fetchData, error } = useFetch()
const router = useRouter()

const article = ref({
    image: null,
    title: "",
    date: "",
    description: "",
    contents: []
})


// add block
function addBlock() {
    article.value.contents.push({ type: "text" })
}

// remove block
function removeBlock(index) {
    article.value.contents.splice(index, 1)
}

// handle content image upload
async function onContentImageChange(e, index) {
    const file = e.target.files[0]
    if (file) {
        if (article.value.contents[index].content) {
            const oldUrl = article.value.contents[index].content
            const oldPath = oldUrl.split(`/storage/v1/object/public/images/`)[1]
            if (oldPath) {
                await supabase.storage.from("images").remove([oldPath])
            }
        }
        const filename = `article/${Date.now()}-${e.target.files[0].name}`
        const { error } = await supabase.storage.from("images").upload(filename, e.target.files[0])
        if (!error) {
            const { data: url } = supabase.storage.from('images').getPublicUrl(filename)
            article.value.contents[index].content = url.publicUrl
        }
    }
}

const onImageChange = async (e) => {
    if (e.target.files[0]) {
        if (article.value.image) {
            console.log(article.value.image)
            const oldUrl = article.value.image
            const oldPath = oldUrl.split(`/storage/v1/object/public/images/`)[1]

            if (oldPath) {
                await supabase.storage.from("images").remove([oldPath])
            }
        }
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
    console.log(article.value)
    await fetchData("/article", {
        method: "POST",
        body: JSON.stringify({
            image: article.value.image,
            title: article.value.title,
            date: new Date(article.value.date),
            description: article.value.description,
            contents: article.value.contents
        })
    })
    if (data.value.success) {
        alert(data.value.message)
        router.replace('/add')
    }
    if (error.value) {
        alert(error.value.message)
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
                <div>
                    <label class="block text-lg font-medium mb-1">Description</label>
                    <QuillEditor v-model:content="article.description" content-type="html" theme="snow"
                        class="bg-white rounded-lg border border-gray-300 shadow" />
                </div>

                <!-- Dynamic Content -->
                <div>
                    <label class="block text-lg font-medium mb-2">Content</label>
                    <div class="space-y-4">
                        <div v-for="(block, index) in article.contents" :key="index"
                            class="p-4 border border-gray-300 shadow rounded-lg bg-gray-50 space-y-2">
                            <!-- Choose type -->
                            <select v-model="article.contents[index].type"
                                class="border rounded-lg px-2 py-1 text-sm border-gray-300 shadow w-20">
                                <option value="text">Text</option>
                                <option value="image">Image</option>
                            </select>

                            <!-- Text input -->
                            <QuillEditor v-if="article.contents[index].type == 'text'" v-model:content="block.content" content-type="html"
                                theme="snow" class="bg-white rounded-lg border border-gray-300 shadow" />

                            <!-- Image input -->
                            <div v-else-if="article.contents[index].type == 'image'">
                                <input type="file" accept="image/*" @change="e => onContentImageChange(e, index)"
                                    class="text-sm" />
                                <div v-if="block.content" class="mt-2">
                                    <img :src="block.content" alt="Preview"
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