import { HeaderComponent } from '@/utils/navs'
import NewsView from './views/NewsView.vue'

export const clientsNewsRoutes = [
  {
    path: '/news',
    name: 'NewsView',
    components: {
      default: NewsView,
      header: HeaderComponent
    }
  }
]
