import { env } from "@/config/env"
import { ref } from "vue"

export const useFetch = async () => {
    const data = ref(null)
    const loading = ref(false)
    const error = ref(null)

    const fetchData = async (path: string, options?: RequestInit) => {
        loading.value = true
        error.value = null
        try {
            const res = await fetch(env.apiUrl + path, {
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                ...options
            })
            const json = await res.json()
            data.value = json
            loading.value = false
        } catch (err) {
            console.log(err)
            error.value = err
        }
    }

    return { data:data.value, loading:loading.value, error:error.value, fetchData }
}