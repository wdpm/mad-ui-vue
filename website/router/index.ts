import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../Home.vue'
import {
  elements,
  components,
  formElements,
  layout,
  patterns,
  plugins,
  views,
} from './routes'

const mapRoutes = (items, path) =>
  items.map((item) => ({
    name: item.name,
    path: `/${path}/${item.name}`,
    component: require(`@/../website/${path}/${item.name}/index`).default,
  }))

const elementRoutes = mapRoutes(elements, 'elements')
const componentRoutes = mapRoutes(components, 'components')
const formRoutes = mapRoutes(formElements, 'form')
const layoutRoutes = mapRoutes(layout, 'layout')
const patternRoutes = mapRoutes(patterns, 'patterns')
const pluginRoutes = mapRoutes(plugins, 'plugins')
const viewRoutes = mapRoutes(views, 'views')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../About.vue'),
  },
].concat(
  elementRoutes,
  componentRoutes,
  formRoutes,
  layoutRoutes,
  patternRoutes,
  pluginRoutes,
  viewRoutes
)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
