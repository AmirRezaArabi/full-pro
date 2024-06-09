import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import  Store  from './store'
import Notifications from '@kyvg/vue3-notification'
import PrimeVue from 'primevue/config';



createApp(App).use(router).use(Notifications).use(Store).use(PrimeVue, {
    unstyled: true
}).mount('#app')
