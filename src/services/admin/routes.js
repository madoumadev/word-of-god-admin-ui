import AdminMainPage from './AdminMainPage.vue'
import DashboardPage from './DashboardPage.vue'
import { accountRoutes } from './account/routes'
import { streamingRoutes } from './streaming/routes'
import { predicationsRoutes } from './predications/routes'

export const adminRoutes = [
  {
    path: '/admin',
    name: 'AdminMainPage',
    component: AdminMainPage,
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
