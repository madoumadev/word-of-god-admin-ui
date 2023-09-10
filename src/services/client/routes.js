import { HeaderComponent } from '@/utils/navs'
import HomeView from '@/services/client/HomeView.vue'
import { clientStreamingRoutes } from '@/services/client/streaming/routes'
import { clientsPredicationsRoutes } from '@/services/client/predications/routes'

export const clientRoutes = [
  {
    path: '',
    name: 'HomeView',
    components: { default: HomeView, header: HeaderComponent }
  },
  ...clientStreamingRoutes,
  ...clientsPredicationsRoutes
]
