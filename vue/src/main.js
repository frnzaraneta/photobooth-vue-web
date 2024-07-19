import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import VueSmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App).use(router)
app.use(VueSmoothScroll)
app.mount('#app')
  
