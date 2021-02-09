import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../usages/Home.vue'
import {
  elements,
  components,
  formElements,
  layout,
  patterns,
  views,
} from '@/router/routes'

const mapRoutes = (items, path) =>
  items.map((item) => ({
    name: item.name,
    path: `/${path}/${item.name}`,
    component: require(`@/usages/${path}/${item.name}/index`).default,
  }))

const elementRoutes = mapRoutes(elements, 'elements')
const componentRoutes = mapRoutes(components, 'components')
const formRoutes = mapRoutes(formElements, 'form')
const layoutRoutes = mapRoutes(layout, 'layout')
const patternRoutes = mapRoutes(patterns, 'patterns')
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
      import(/* webpackChunkName: "about" */ '../usages/About.vue'),
  },
].concat(
  elementRoutes,
  componentRoutes,
  formRoutes,
  layoutRoutes,
  patternRoutes,
  viewRoutes
)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
