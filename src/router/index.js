import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NavbarComponent from '@/components/NavbarComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active-class',
  linkExactActiveClass: 'exact-active-link',
  routes: [
    {
      path: '/admin',
      alias: '',
      name: 'Home',
      components: { default: HomeView, header: NavbarComponent },
      children: [
        {
          path: 'videos',
          name: 'VideosView',
          component: () => import('../views/VideosView.vue')
        }
      ]
    }
  ]
})

export default router
