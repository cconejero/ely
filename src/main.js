import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Countdown from 'vue3-flip-countdown'
import VuePwaInstallPlugin from "vue-pwa-install";

createApp(App).use(Countdown).use(VuePwaInstallPlugin).mount('#app')
