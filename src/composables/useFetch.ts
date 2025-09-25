import { env } from "@/config/env"
import axios from "axios"
import { ref } from "vue"

export const useFetch = () => {
    const data = ref(null)
    const loading = ref(false)
    const error = ref(null)

    const fetchData = async (path: string, options?: any) => {
        loading.value = true
        error.value = null
        try {
            const res = await axios(env.apiUrl + path, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
                ...options
            })
            console.log(res)
            data.value = res.data
            loading.value = false
        } catch (err) {
            console.log(err)
            error.value = err
        }
    }

    return { data:data, loading:loading, error:error, fetchData }
}