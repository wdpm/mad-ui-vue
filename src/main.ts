import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import CircleRipple from '@/plugins/ripple'

const app = createApp(App)
app.use(CircleRipple)
app.use(router).mount('#app')
