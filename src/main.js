import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import axios from 'axios'
import router from './router'
import store from './store'
const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(store)
app.use(router).mount('#app')

