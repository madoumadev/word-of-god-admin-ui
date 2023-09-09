import { AsideNavComponent, HeaderComponent } from '@/utils/navs'
import PredicationsListView from '@/services/predications/views/PredicationsListView.vue'

export const predicationsRoutes = [
  {
    path: '/predications',
    name: 'PredicationsListView',
    components: {
      default: PredicationsListView,
      header: HeaderComponent,
      asideNav: AsideNavComponent
    }
  }
]
