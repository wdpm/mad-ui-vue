import { App } from 'vue'
import Breadcrumb from './lib/index.vue'

Breadcrumb.install = (app: App): void => {
  app.component(Breadcrumb.name, Breadcrumb)
}

export default Breadcrumb
