import { AsideNavComponent, HeaderComponent } from '@/utils/navs'
import StreamingView from '@/services/streaming/views/StreamingView.vue'

export const streamingRoutes = [
  {
    path: '/live',
    name: 'StreamingView',
    components: {
      default: StreamingView,
      header: HeaderComponent,
      asideNav: AsideNavComponent
    }
  }
]
