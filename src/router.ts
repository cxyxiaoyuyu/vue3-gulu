import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

import Button from './components/Button.vue'
import Switch from './components/Switch.vue'
import Slide from './components/Slide.vue'
import Tabs from './components/Tabs.vue'
import Dialog from './components/Dialog.vue'
import DocComponent from './components/DocComponent.vue'

const history = createWebHashHistory()
const router = createRouter({
    history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc,children:[
            {path: '', component: DocComponent},
            {path: 'button', component: Button},
            {path: 'switch', component: Switch},
            {path: 'slide', component: Slide},
            {path: 'dialog', component: Dialog},
            {path: 'tabs', component: Tabs},
        ]}
    ]
})

export default router