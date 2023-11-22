<template>
  <ClientLayout>
    <div
      class="overflow-y-auto lg:flex h-full lg:h-[99%] w-full lg:pb-[50px] bg-white lg:rounded-t-3xl lg:rounded-b-3xl"
    >
      <div v-if="!!params?.videoId" class="lg:pb-4 w-full bg-white sticky top-0 z-10">
        <div class="flex justify-between items-center px-4 py-6">
          <span class="line-clamp-1">{{ videosList[0].snippet.title }}</span>

          <a
            :href="downloadVideo(params?.videoId)"
            target="_blank"
            rel="noreferrer"
            class="inline-flex items-center border space-x-2 bg-white px-4 py-2 rounded-xl"
          >
            <HeroIcon icon-name="ArrowDownTrayIcon" icon-type="outline" class="w-6 h-6" />
            <span class="hidden sm:block">Скачать</span>
          </a>
        </div>

        <div v-if="currentVideoId" class="aspect-w-16 aspect-h-9 lg:mx-4">
          <iframe
            :src="`https://www.youtube.com/embed/${currentVideoId}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div v-if="liveStream" class="hidden lg:flex flex-col bg-white p-6">
          <p class="capitalize text-gray-400 text-sm mb-4">БЛИЖАЙШАЯ ТРАНСЛЯЦИЯ</p>
          <div class="inline-flex items-center mb-2 space-x-2">
            <HeroIcon icon-type="outline" icon-name="CalendarIcon" class="w-4 h-5 text-gray-400" />
            <p class="text-sm text-black capitalize">
              {{ liveStream?.snippet?.title?.toString() }}
            </p>
          </div>
          <div class="inline-flex items-center space-x-2">
            <HeroIcon icon-type="outline" icon-name="ClockIcon" class="w-4 h-5 text-gray-400" />
            <p class="text-sm capitalize text-black">
              В {{ timestampToLocalTime(liveStream?.snippet?.publishedAt?.value)?.toString() }}
            </p>
          </div>
        </div>
      </div>

      <div v-if="!!params?.videoId" class="lg:hidden lg:px-4 px-2 lg:py-8 flex flex-col h-full">
        <ul class="space-y-2 py-4">
          <li
            v-for="video in videosList"
            :key="video.id"
            :class="[
              params?.videoId === video.snippet.resourceId.videoId
                ? 'border-gray-500'
                : 'border-gray-100',
              'py-2 border-2  pl-2 rounded-xl hover:bg-gray-50 hover:border-gray-500 transition-all duration-300 cursor-pointer bg-white'
            ]"
          >
            <VideoCard :video="video" />
          </li>
        </ul>
      </div>

      <div v-if="!params?.videoId" class="text-gray-500">Select video</div>
    </div>
  </ClientLayout>
</template>
<script>
import { computed, defineComponent, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useTitle } from '@vueuse/core'
import getFormattedDate from '../../../../utils/getFormattedDate'
import { useRoute } from 'vue-router'
import ClientLayout from '../../../../layouts/ClientLayout.vue'
import VideoCard from '../components/VideoCard.vue'
import { APP_NAME } from '../../../../constants/consts'
import { useGetPredicationStatus } from '../../../../hooks/useGetPredicationStatus'
import HeroIcon from '../../../../components/icons/HeroIcon.vue'
import { APP_URL } from '../../../../http/config'
import timestampToLocalTime from '../../../../utils/timestampToLocalTime'

export default defineComponent({
  name: 'PredicationsView',
  components: { VideoCard, ClientLayout, HeroIcon },
  methods: { timestampToLocalTime, getFormattedDate, useGetPredicationStatus },

  setup() {
    useTitle('Видео - ' + APP_NAME)
    const store = useStore()
    const route = useRoute()
    const videosList = computed(() => store.getters['clientVideosStore/videosList'])
    let params = computed(() => route.params)

    onBeforeMount(() => {
      store.dispatch('clientVideosStore/getVideos', params.value?.videoId)
      store.dispatch('predicationsStore/getVideoLive')
    })

    return {
      params,
      videosList,
      downloadVideo: (videoId) => `${APP_URL}/videos/download/${videoId}`,
      currentVideoId: computed(() => store.getters['clientVideosStore/currentVideoId']),
      loading: computed(() => store.getters['clientVideosStore/loading']),
      predicationsIds: computed(() => store.getters['clientVideosStore/predicationsIds']),
      liveStream: computed(() => store.getters['predicationsStore/liveStream'])
    }
  },

  watch: {
    '$route.params': {
      immediate: true,
      deep: true,

      handler(newValue) {
        this.$store.commit('clientVideosStore/SET_CURRENT_VIDEO_ID', newValue?.videoId)
      }
    }
  }
})
</script>
