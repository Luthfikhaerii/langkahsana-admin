<script setup>
import { ref, onMounted, defineProps } from "vue"
import { QuillEditor } from "@vueup/vue-quill"
import "@vueup/vue-quill/dist/vue-quill.snow.css"
import { useFetch } from "@/composables/useFetch"
import { useRoute, useRouter } from "vue-router"
import { env } from "@/config/env"

const route = useRoute()
const router = useRouter()
const { data: article, fetchData, error } = useFetch()

// handle cover upload
function onCoverChange(e) {
    const file = e.target.files[0]
    if (file) {
        article.value.cover = URL.createObjectURL(file)
    }
}

// handle content image upload
async function onContentImageChange(e, index) {
    const file = e.target.files[0]
    if (file) {
        if (article.value.data.contents[index].content) {
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
            article.value.data.contents[index].content = url.publicUrl
        }
    }
}

// add block
function addBlock() {
    article.value.data.contents.push({ type: "text", content: "" })
}

// remove block
function removeBlock(index) {
    article.value.data.contents.splice(index, 1)
}

// submit
const submitArticle = async () => {
    try {
        const res = await fetch(env.apiUrl+`/article/${route.params.id}`, {
                        method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                image: article.value.data.image,
                title: article.value.data.title,
                date: article.value.data.date,
                description: article.value.data.description,
                contents: article.value.data.contents
            })
        })
        console.log(res)
        const json = await res.json()
        console.log(json)
        // if (json.value.success) {
        //     alert(json.message)
        //     router.replace('/')
        // }
    } catch (err) {
        alert(err)
    }

}

onMounted(async () => {

    await fetchData(`/article/${route.params.id}`)
    if (error.value) {
        alert(error.value.message)
    }
    if (article.value) {
        console.log(article.value)
        console.log(article.value.data)
    }
})

</script>
<template>
    <div class="border border-gray-100 shadow-sm bg-white w-full h-full ">
        <p class="text-custom-black text-3xl mx-14 mt-10 font-semibold">Update Article</p>
        <hr class="border border-gray-300 mx-14 my-8" />
        <div v-if="article" class="gap-10 px-14 pb-10 w-full">
            <form @submit.prevent="submitArticle" class="space-y-6 mb-8">
                <!-- Upload cover image -->
                <div>
                    <label class="block text-lg font-medium mb-1">Cover Image</label>
                    <div v-if="article.data.image" class="my-4">
                        <img :src="article.data.image" alt="Preview" class="w-32 h-32 object-cover rounded-lg border" />
                    </div>
                    <input type="file" @change="onCoverChange" accept="image/*"
                        class="block text-sm rounded-lg border border-gray-300 shadow" />

                </div>

                <!-- Title -->
                <div>
                    <label class="block text-lg font-medium mb-1">Title</label>
                    <input v-model="article.data.title" type="text"
                        class="w-full border border-gray-300 shadow rounded-lg px-3 py-2 text-sm" required />
                </div>

                <!-- Date -->
                <div>
                    <label class="block text-lg font-medium mb-1">Date</label>
                    <input v-model="article.data.date" type="text"
                        class="w-full border border-gray-300 shadow rounded-lg px-3 py-2 text-sm" required />
                </div>

                <!-- Dynamic Content -->
                <div>
                    <label class="block text-lg font-medium mb-2">Content</label>
                    <div class="space-y-4">
                        <div v-for="(block, index) in article.data.contents" :key="index"
                            class="p-4 border border-gray-300 shadow rounded-lg bg-gray-50 space-y-2">
                            <!-- Choose type -->
                            <p>{{ block.type }}</p>
                            <select v-model="block.type"
                                class="border rounded-lg px-2 py-1 text-sm border-gray-300 shadow w-20">
                                <option value="text">Text</option>
                                <option value="image">Image</option>
                            </select>

                            <!-- Text input -->
                            <QuillEditor v-if="block.type == 'text'" v-model:content="block.content" content-type="html"
                                theme="snow" class="bg-white rounded-lg border border-gray-300 shadow" />

                            <!-- Image input -->
                            <div v-else>
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
                        Update Article
                    </button>
                </div>
            </form>
        </div>
        <div v-else class="gap-10 px-14 pb-10 w-full">
            <p>Loading....</p>
        </div>
    </div>
</template>