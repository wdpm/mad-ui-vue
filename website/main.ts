import {createApp} from 'vue'

import App from './AppSimple.vue'

const app = createApp(App)
app.mount('#app')

if (module.hot) {
  module.hot.accept()
}
