import { createRouter, createWebHistory } from 'vue-router'
import { adminRoutes } from './services/admin/routes'
import { clientRoutes } from './services/client/routes'

const combineRoutes = [
  ...clientRoutes,
  // admin routes
  ...adminRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active-class',
  linkExactActiveClass: 'exact-active-link',
  routes: combineRoutes
})

export default router
