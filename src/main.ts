import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import xiaoyu from './components/xiaoyu.vue'
import xiaoyu2 from './components/xiaoyu2.vue'

import {createWebHashHistory,createRouter} from 'vue-router'


const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {path: '/', component: xiaoyu},
        {path: '/2', component: xiaoyu2}
    ]
})

const app = createApp(App)
app.use(router)

app.mount('#app')
