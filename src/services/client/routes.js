import HomeView from './HomeView.vue'
import { clientStreamingRoutes } from './streaming/routes'
import { clientsPredicationsRoutes } from './predications/routes'

export const clientRoutes = [
  {
    path: '',
    name: 'HomeView',
    components: { default: HomeView }
  },
  ...clientStreamingRoutes,
  ...clientsPredicationsRoutes
]
