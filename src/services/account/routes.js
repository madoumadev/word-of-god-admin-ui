import { AsideNavComponent, HeaderComponent } from '@/utils/navs'
import ProfileView from '@/services/account/views/ProfileView.vue'

export const accountRoutes = [
  {
    path: '/profile',
    name: 'ProfileView',
    components: {
      default: ProfileView,
      header: HeaderComponent,
      asideNav: AsideNavComponent
    }
  }
]
