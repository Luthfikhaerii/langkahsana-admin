import { ref } from "vue"
import { env } from "../config/env"
import { useRouter } from "vue-router"

export const useAuth = () => {
    const user = ref({ email: "", role: "" })
    const error = ref(false)
    const router = useRouter()

    const login = async ({ email, password }: { email: string, password: string }) => {
        try {
            const res = await fetch(env.apiUrl + '/user/login', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    email: email, password: password
                }),
                credentials: 'include'
            })
            const data = await res.json()
            if (data?.success == true) {
                user.value.email = data.data.email
                user.value.role = data.data.role
                router.replace('/')
            }
        } catch (err) {
            console.log(err)
            error.value = true
        }
    }

    const logout = async () => {
        try {
            const res = await fetch(env.apiUrl + "/user/logout", {
                method: 'DELETE',
                credentials: 'include'
            })
            const json = await res.json()
            if (json.success) {
                user.value.email = ""
                user.value.role = ""
                alert(json.message)
                router.replace('/login')
            }
        } catch (err) {
            console.log(err)
            error.value = true
        }
    }

    const check = async () => {
        if (user.value.role !== "admin") {
            try {
                const res = await fetch(env.apiUrl + "/user/auth", {
                    credentials: 'include'
                })
                const json = await res.json()
                if (json?.success == true) {
                    user.value.email = json.data.email
                    user.value.role = json.data.role
                } else {
                    router.replace('/login')
                }
            } catch (err) {
                console.log(err)
                error.value = true
            }
        }else{
            return true
        }
    }

    return { user: user.value, logout, login, check, error: error.value }
}