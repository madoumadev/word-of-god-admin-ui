import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active-class',
  linkExactActiveClass: 'exact-active-link',
  routes: [
    {
      path: '',
      name: 'Home',
      components: { default: HomeView, header: NavbarComponent },
      children: [
        {
          alias: '',
          path: 'videos',
          name: 'VideosView',
          component: () => import('../views/VideosView.vue')
        },
        {
          path: 'videos',
          name: 'StreamingView',
          component: () => import('../views/StreamingView.vue')
        }
      ]
    }
  ]
})

export default router
