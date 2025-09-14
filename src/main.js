import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {createRouter,createWebHistory} from "vue-router"

const router = createRouter({
    routes: [
        {
            path:"/",
            component: App
        }
    ],
    history: createWebHistory()
})


createApp(App).use(router).mount('#app')
