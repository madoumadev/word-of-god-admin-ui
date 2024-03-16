import HomeView from './HomeView.vue'
import { clientStreamingRoutes } from './streaming/routes'
import { clientsPredicationsRoutes } from './predications/routes'
import { clientsTestimonyRoutes } from './testimony/routes'
import { clientsNewsRoutes } from './news/routes'

export const clientRoutes = [
  {
    path: '',
    name: 'HomeView',
    components: { default: HomeView }
  },
  ...clientStreamingRoutes,
  ...clientsPredicationsRoutes,
  ...clientsTestimonyRoutes,
  ...clientsNewsRoutes
]
