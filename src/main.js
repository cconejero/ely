import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Countdown from 'vue3-flip-countdown'

createApp(App).use(Countdown).mount('#app')
