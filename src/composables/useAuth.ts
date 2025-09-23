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
            const res = await fetch(env.apiUrl+"/user/auth",{
                credentials:'include'
            })
            const json = await res.json()
            user.value.email = json.data.email
            user.value.role  = json.data.role
        }catch(err){
            error.value = err
        }
    }

    if(!user){
        me()
        console.log('awaa')
    }

    return {user:user.value,error,setAuth,me}
}