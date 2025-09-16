import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Article from './pages/Article.vue'
import Trip from './pages/Trip.vue'
import Participant from './pages/Participant.vue'
import ParticipantDetail from './pages/ParticipantDetail.vue'
import { createRouter, createWebHistory } from "vue-router"
import ArticleEdit from './pages/ArticleEdit.vue'
import ArticleAdd from './pages/ArticleAdd.vue'
import TripEdit from './pages/TripEdit.vue'
import TripAdd from './pages/TripAdd.vue'
import ParticipantAdd from './pages/ParticipantAdd.vue'
import Login from './pages/Login.vue'

const router = createRouter({
    routes: [
        {
            path: "/",
            children: [
                {
                    path: "",
                    component: Article,
                },
                {
                    path: ":id",
                    component: ArticleEdit
                },
                {
                    path: "add",
                    component: ArticleAdd
                },
                
                {
                    path: "trip",
                    component: Trip,
                },
                {
                    path: "trip/:id",
                    component: TripEdit
                },
                {
                    path: "trip/add",
                    component: TripAdd
                },
                {
                    path: "participant",
                    component: Participant,
                },
                {
                    path: "participant/:id",
                    component: ParticipantDetail
                },
                {
                    path: "participant/add",
                    component: ParticipantAdd
                }
            ],
        },
        {
            path:"/login",
            component: Login
        }
    ],
    history: createWebHistory()
})

createApp(App).use(router).mount('#app')
