import { HeaderComponent } from '@/utils/navs'
import TestimonyMainView from './views/TestimonyMainView.vue'
import ClientTestimonyAsideNav from './components/ClientTestimonyAsideNav.vue'

export const clientsTestimonyRoutes = [
  {
    path: '/testimony/:testimonyId?',
    name: 'TestimonyMainView',
    components: {
      default: TestimonyMainView,
      header: HeaderComponent,
      asideNav: ClientTestimonyAsideNav
    }
  }
]
