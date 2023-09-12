<template>
  <div class="overflow-hidden sm:flex h-full w-full sm:justify-center sm:items-center">
    <div class="bg-white sm:px-4 pb-4 sm:rounded-3xl mt-2 2xl:w-3/4 w-full sticky top-0 z-10">
      <div class="flex justify-between py-3 sm:px-0 px-2">
        <div>
          <h1 class="line-clamp-1">Молодежный лагерь в Раменском</h1>
          <span class="text-gray-400">10.09.2023</span>
        </div>
        <div>
          <button
            class="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 text-gray-500 rounded-xl hover:text-gray-700"
          >
            <HeroIcon icon-name="ArrowDownTrayIcon" icon-type="outline" class="w-6 h-6" />
            <span class="hidden sm:block">Скачать видео-файл</span>
          </button>
        </div>
      </div>

      <div class="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.youtube.com/embed/AsrYNSIEnZE"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div class="sm:hidden flex flex-col py-2 overflow-y-scroll h-full">
      <ul class="space-y-2">
        <li
          v-for="video in videosList"
          :key="video.id"
          class="py-2 hover:bg-gray-50 pl-2 rounded-xl transition-colors cursor-pointer"
        >
          <div class="grid grid-cols-7 gap-4">
            <div class="col-end-1 relative">
              <img
                src="https://wordofgod.ru/design/wog/img/photo/godovschina_2015.jpg"
                class="w-[120px] h-[75px] object-cover rounded-xl"
                alt=""
              />
              <span class="bg-black text-xs px-1.5 text-white absolute bottom-1 right-1"
                >10:34</span
              >
            </div>
            <div class="col-span-6 text-gray-500 text-sm">
              <span class="line-clamp-2">{{ video.title }}</span>
              <span class="line-clamp-1 pt-2">{{ video.createdAt }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useGetPredicationStatus } from '@/hooks/useGetPredicationStatus'
import HeroIcon from '@/components/icons/HeroIcon.vue'
import { useTitle } from '@vueuse/core'
import { APP_NAME } from '@/constants/consts'

export default defineComponent({
  name: 'PredicationsView',
  components: { HeroIcon },
  methods: { useGetPredicationStatus },

  setup() {
    const store = useStore()

    useTitle('Видео - ' + APP_NAME)
    const isAllChecked = ref(false)
    function saveVideo(form) {
      console.log(form)
    }

    return {
      predicationsIds: computed(() => store.getters['predicationsStore/predicationsIds']),
      saveVideo,
      isAllChecked,
      videosList: computed(() => store.getters['predicationsStore/videosList']),
      handleOpenAddVideo: () => store.commit('SET_IS_OPEN', !store.getters['isOpen'])
    }
  },

  watch: {
    predicationsIds(newValue) {
      const $dom = document.querySelector('#checkAllPredications')
      if (newValue.length === 0) {
        $dom.checked = false
        $dom.indeterminate = false
      } else if (newValue.length === this.videosList.length) {
        $dom.checked = true
        $dom.indeterminate = false
      } else {
        $dom.checked = false
        $dom.indeterminate = true
      }
    },

    isAllChecked(checkState) {
      if (checkState) {
        this.videosList.forEach((p) => {
          if (!this.videosList.includes(p.id)) {
            this.$store.commit('predicationsStore/PUSH_PREDICATION_ID', p.id)
          }
        })
      } else {
        this.$store.commit('predicationsStore/SET_PREDICATION_IDS_SELECTION', [])
      }
    }
  }
})
</script>
