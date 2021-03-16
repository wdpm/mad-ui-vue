import { App } from 'vue'
import CircleRipple from './circle-ripple/index'

export default (app: App): void => {
  app.component(CircleRipple.name, CircleRipple)
}

export { CircleRipple }
