import { AsideNavComponent, HeaderComponent } from '@/utils/navs'
import { accountRoutes } from '@/services/admin/account/routes'
import { predicationsRoutes } from '@/services/admin/predications/routes'
import DashboardPage from '@/services/admin/DashboardPage.vue'
import AdminMainPage from '@/services/admin/AdminMainPage.vue'
import { streamingRoutes } from '@/services/admin/streaming/routes'
export const adminRoutes = [
  {
    path: '/admin',
    name: 'AdminMainPage',
    components: { default: AdminMainPage, header: HeaderComponent, asideNav: AsideNavComponent },
    children: [
      {
        path: '',
        name: 'DashboardPage',
        component: DashboardPage
      },
      ...accountRoutes,
      ...predicationsRoutes,
      ...streamingRoutes
    ]
  }
]
