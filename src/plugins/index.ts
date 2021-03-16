import { App } from 'vue'
import MadCircularRipple from './circular-ripple/index.vue'

export default (app: App): void => {
  app.component(MadCircularRipple.name, MadCircularRipple)
}

export { MadCircularRipple }
