import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Article from './pages/Article.vue'
import Trip from './pages/Trip.vue'
import Participant from './pages/Participant.vue'
import ParticipantDetail from './pages/ParticipantDetail.vue'
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    routes: [
        {
            path: "/",
            children: [
                {
                    path: "",
                    component: Article
                },
                {
                    path:"trip",
                    component:Trip
                },
                {
                    path:"participant",
                    component:Participant,
                    children: [
                        {
                            path : ":id",
                            component:ParticipantDetail
                        }
                    ]
                }
            ],
        }
    ],
    history: createWebHistory()
})

createApp(App).use(router).mount('#app')
