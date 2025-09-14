import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Article from './pages/Article.vue'
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    routes: [
        {
            path: "/",
            children: [
                {
                    path: "",
                    component: Article
                }
            ],
        }
    ],
    history: createWebHistory()
})

createApp(App).use(router).mount('#app')
