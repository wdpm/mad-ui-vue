import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MadRipplePlugin from '@/plugins/ripple'

const app = createApp(App)
app.use(MadRipplePlugin)
app.use(router).mount('#app')
