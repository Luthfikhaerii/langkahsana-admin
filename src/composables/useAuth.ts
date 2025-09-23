import { ref } from "vue"
import { env } from "../config/env"

export const useAuth = ()=>{
    const user = ref({email:"",role:""})
    const error = ref(null)

    function setAuth({email,role}:{email:string,role:string}){
        user.value.email = email
        user.value.role = role
    }

    async function me(){
        try{
            const res = await fetch(env.apiUrl+"/user/auth")
            const json = await res.json()
            user.value = json.data
        }catch(err){
            error.value = err
        }
    }

    if(!user){
        me()
    }

    return {user,error,setAuth}
}