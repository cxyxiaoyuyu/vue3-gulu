import {createWebHashHistory,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

import ButtonDemo from './components/ButtonDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
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
            {path: 'button', component: ButtonDemo},
            {path: 'switch', component: SwitchDemo},
            {path: 'slide', component: Slide},
            {path: 'dialog', component: Dialog},
            {path: 'tabs', component: Tabs},
        ]}
    ]
})

export default router