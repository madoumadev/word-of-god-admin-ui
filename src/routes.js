import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { adminRoutes } from '@/services/admin/routes'
import { HeaderComponent } from '@/utils/navs'

const combineRoutes = [
  {
    path: '',
    name: 'HomeView',
    components: { default: HomeView, header: HeaderComponent }
  },

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
