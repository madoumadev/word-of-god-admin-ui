import ClientStreamingAsideNav from '@/services/client/streaming/components/ClientStreamingAsideNav.vue'
import { HeaderComponent } from '@/utils/navs'
import MainStreamingClientPage from '@/services/client/streaming/views/MainStreamingClientPage.vue'
import StreamingClientDirection from '@/services/client/streaming/views/StreamingClientDirection.vue'
import AudioStreamingClient from '@/services/client/streaming/views/AudioStreamingClient.vue'
import VideoStreamingClient from '@/services/client/streaming/views/VideoStreamingClient.vue'

export const clientStreamingRoutes = [
  {
    path: '/live',
    name: 'StreamingClient',
    components: {
      default: MainStreamingClientPage,
      header: HeaderComponent,
      asideNav: ClientStreamingAsideNav
    },

    children: [
      {
        path: '',
        name: 'StreamingClientDirection',
        component: StreamingClientDirection
      },
      {
        path: 'video',
        name: 'VideoStreamingClient',
        component: VideoStreamingClient
      },
      {
        path: 'audio',
        name: 'AudioStreamingClient',
        component: AudioStreamingClient
      }
    ]
  }
]
