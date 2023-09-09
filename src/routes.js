import { createRouter, createWebHistory } from 'vue-router'
import { predicationsRoutes } from '@/services/predications/routes'
import HomeView from '@/views/HomeView.vue'
import { AsideNavComponent, HeaderComponent } from '@/utils/navs'
import { streamingRoutes } from '@/services/streaming/routes'
import { accountRoutes } from '@/services/account/routes'

const combineRoutes = [
  {
    path: '',
    name: 'HomeView',
    components: { HomeView, header: HeaderComponent, asideNav: AsideNavComponent }
  },

  //predictions routes
  ...predicationsRoutes,

  // account routes
  ...accountRoutes,

  // streaming routes
  ...streamingRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active-class',
  linkExactActiveClass: 'exact-active-link',
  routes: combineRoutes
})

export default router
