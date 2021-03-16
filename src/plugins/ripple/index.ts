import { App } from 'vue'
import MadCircleRipple from './circle-ripple/index.vue'

export default (app: App): void => {
  app.component(MadCircleRipple.name, MadCircleRipple)
}

export { MadCircleRipple }
