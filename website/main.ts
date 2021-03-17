import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
// import MadRipplePlugin from '@/plugins/index'

const app = createApp(App)
// app.use(MadRipplePlugin)
app.use(router).mount('#app')
