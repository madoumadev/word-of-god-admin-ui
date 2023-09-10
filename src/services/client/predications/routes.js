import { HeaderComponent } from '@/utils/navs'
import PredicationsView from '@/services/client/predications/views/PredicationsView.vue'
import ClientVideoAsideNav from '@/services/client/predications/components/ClientVideoAsideNav.vue'

export const clientsPredicationsRoutes = [
  {
    path: '/videos',
    name: 'PredicationsView',
    components: {
      default: PredicationsView,
      header: HeaderComponent,
      asideNav: ClientVideoAsideNav
    }
  }
]
