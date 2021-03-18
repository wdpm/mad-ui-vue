import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
// import MadUI from 'mad-ui'

const app = createApp(App)
// app.use(MadUI)
app.use(router)
app.mount('#app')
