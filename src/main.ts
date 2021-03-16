import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MadCircleRipple from '@/plugins/ripple'

const app = createApp(App)
app.use(MadCircleRipple)
app.use(router).mount('#app')
