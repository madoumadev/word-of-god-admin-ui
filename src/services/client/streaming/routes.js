import StreamingClient from '@/services/client/streaming/views/StreamingClient.vue'
import ClientStreamingAsideNav from '@/services/client/streaming/components/ClientStreamingAsideNav.vue'
import { HeaderComponent } from '@/utils/navs'

export const clientStreamingRoutes = [
  {
    path: '/live',
    name: 'StreamingClient',
    components: {
      default: StreamingClient,
      header: HeaderComponent,
      asideNav: ClientStreamingAsideNav
    }
  }
]
