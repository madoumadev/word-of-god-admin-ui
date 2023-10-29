<template>
  <ClientLayout>
    <div v-if="!loading" class="overflow-y-auto lg:flex h-full w-full pb-[50px]">
      <div v-if="!!params?.videoId" class="pb-4 w-full sticky top-0 z-10">
        <div class="flex justify-between items-center py-3 bg-white lg:rounded-md px-4 lg:mb-4">
          <span class="line-clamp-1">{{ videosList[0].snippet.title }}</span>

          <button
            class="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 text-gray-500 rounded-xl hover:text-gray-700"
          >
            <HeroIcon icon-name="ArrowDownTrayIcon" icon-type="outline" class="w-6 h-6" />
            <span class="hidden sm:block">Скачать видео-файл</span>
          </button>
        </div>

        <div v-if="currentVideoId" class="aspect-w-16 aspect-h-9">
          <iframe
            :src="`https://www.youtube.com/embed/${currentVideoId}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="hidden 2xl:flex flex-col bg-white mt-4 p-6">
          <p class="capitalize text-gray-400 text-sm mb-4">БЛИЖАЙШАЯ ТРАНСЛЯЦИЯ</p>
          <div class="inline-flex items-center mb-2 space-x-2">
            <HeroIcon icon-type="outline" icon-name="CalendarIcon" class="w-4 h-5 text-gray-400" />
            <p class="text-sm text-black capitalize font-bold">13 СЕНТЯБРЯ, СРЕДА</p>
          </div>
          <div class="inline-flex items-center space-x-2">
            <HeroIcon icon-type="outline" icon-name="ClockIcon" class="w-4 h-5 text-gray-400" />
            <p class="text-sm font-bold capitalize text-black">В 19:00</p>
          </div>
        </div>
      </div>

      <div v-if="!!params?.videoId" class="lg:hidden px-4 flex flex-col h-full">
        <ul class="space-y-2">
          <li
            v-for="video in videosList"
            :key="video.id"
            :class="[
              params?.videoId === video.snippet.resourceId.videoId
                ? 'border-2 border-gray-500'
                : '',
              'py-2  pl-2 rounded-xl transition-colors cursor-pointer bg-white'
            ]"
          >
            <VideoCard :video="video" />
          </li>
        </ul>
      </div>
      <div v-if="!params?.videoId" class="text-gray-500">Select video</div>
    </div>
    <div v-else>Loading ...</div>
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

export default defineComponent({
  name: 'PredicationsView',
  components: { VideoCard, ClientLayout, HeroIcon },
  methods: { getFormattedDate, useGetPredicationStatus },

  setup() {
    useTitle('Видео - ' + APP_NAME)
    const store = useStore()
    const route = useRoute()
    const videosList = computed(() => store.getters['clientVideosStore/videosList'])
    let params = computed(() => route.params)

    onBeforeMount(() => {
      store.dispatch('clientVideosStore/getVideos', params.value?.videoId)
    })

    return {
      params,
      videosList,
      currentVideoId: computed(() => store.getters['clientVideosStore/currentVideoId']),
      loading: computed(() => store.getters['clientVideosStore/loading']),
      predicationsIds: computed(() => store.getters['clientVideosStore/predicationsIds'])
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
