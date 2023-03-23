import { createApp } from 'vue'
import App from './App.vue'
import FomanticUI from 'vue-fomantic-ui'
import 'fomantic-ui-css/semantic.min.css'
import router from './router/index.js'


import './assets/main.css'



const app = createApp(App).use(router).use(FomanticUI).mount('#app')
