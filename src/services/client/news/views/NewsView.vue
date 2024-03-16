<template>
  <div class="overflow-hidden h-screen overflow-y-auto">
    <HeaderComponent class="max-w-screen-xl mx-auto w-full" />

    <div class="flex flex-col max-w-screen-xl mx-auto w-full">
      <div class="mt-6 h-full mx-4">
        <h5 class="text-2xl text-gray-200 pb-4">Обьявления (5)</h5>
        <div
          v-for="(video, index) in 7"
          :key="index"
          class="my-3 p-6 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"
        >
          <div class="">
            <h1 href="#" class="text-gray-900 font-bold text-3xl">
              ЗАМКОВЫЙ КАМЕНЬ - КРЕЩЕНИЕ СВЯТЫМ ДУХОМ (3 апреля 2019)
            </h1>
            <div class="py-5 text-sm font-regular text-gray-900 flex">
              <span class="mr-3 flex flex-row items-center">
                <HeroIcon icon-type="outline" icon-name="ClockIcon" class="w-4 h-5 text-gray-500" />
                <span class="ml-1">6 mins ago</span>
              </span>

              <a href="#" class="flex flex-row items-center hover:text-indigo-600 mr-3">
                <HeroIcon
                  icon-type="outline"
                  icon-name="CalendarIcon"
                  class="w-4 h-5 text-gray-500"
                />
                <span class="ml-1">{{ new Date().toLocaleDateString() }}</span></a
              >
            </div>
            <hr />
            <p class="text-base leading-8 my-5 text-justify">
              В современном мире, под словом «усыновление» подразумевается действие, в результате
              которого ребёнок из одной семьи становится членом другой. Однако греческий или римский
              отец усыновлял как сына своего собственного ребёнка. По рождению он был ребёнком;
              усыновление делало его сыном. В периоде между рождением и усыновлением проходили
              стадии роста образования и воспитания. По достижении зрелости сын становился
              кандидатом для усыновления в сыновство. Во время этой церемонии усыновления сын
              признавался достойным представлять своего отца. Когда он достигал зрелости, его отец
              мог позволить ему стать во главе семейного бизнеса. Таким образом сын становился
              наследником всего того, что принадлежало отцу. По рождению он имел право на
              наследство, однако усыновление делало его участником наследия. Усыновление проходило
              как формальная церемония. Сына помещали на почетное место, чтобы официально выразить
              ему признание перед людьми. Особые одежды указывали на его новый статус. Также ему
              давали кольцо, указывающее на его власть и право действовать от имени отца. Покаяние и
              исповедание веры - это принятие Христа верующим. Но крещение Святым Духом - это Божье
              принятие верующего. Это Бог, признающий верующего Своим сыном и помещающий его в Тело.
            </p>
          </div>
        </div>
      </div>
      <LooadingComponent v-if="isLoading" />
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, onBeforeMount, ref } from 'vue'
import { useStore } from 'vuex'
import { useTitle } from '@vueuse/core'
import getFormattedDate from '../../../../utils/getFormattedDate'
import { useRoute } from 'vue-router'
import { APP_NAME } from '../../../../constants/consts'
import { useGetPredicationStatus } from '../../../../hooks/useGetPredicationStatus'
import { APP_URL } from '../../../../http/config'
import timestampToLocalTime from '../../../../utils/timestampToLocalTime'
import HeaderComponent from '../../../../components/header/HeaderComponent.vue'
import LooadingComponent from '../../../../components/shared/LoadingComponent.vue'
import HeroIcon from '../../../../components/icons/HeroIcon.vue'

export default defineComponent({
  name: 'NewsView',
  components: {
    HeroIcon,
    LooadingComponent,
    HeaderComponent
  },
  methods: { timestampToLocalTime, getFormattedDate, useGetPredicationStatus },

  setup() {
    useTitle('Видео - ' + APP_NAME)
    const store = useStore()
    const route = useRoute()
    const isLoading = ref(false)
    const filteredVideos = computed(() => store.getters['clientVideosStore/filteredVideos'])
    let params = computed(() => route.params)
    const searchQuery = ref('')

    onBeforeMount(() => {
      store.dispatch('clientVideosStore/getVideos', params.value?.videoId)
      store.dispatch('predicationsStore/getVideoLive')
    })

    return {
      params,
      filteredVideos,
      searchQuery,
      isLoading,
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
