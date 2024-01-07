import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import  Store  from './store'

createApp(App).use(router).use(Store).mount('#app')
