<template>
  <div class="overflow-y-auto h-full p-4 sm:p-0">
    <div class=" ">
      <h5 class="text-2xl text-gray-900 pb-10">Трансляция</h5>
    </div>
    <div class="max-w-screen-md mx-auto">
      <figure class="lg:mb-0 mb-8 lg:my-10 text-center">
        <svg
          class="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path
            d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
          />
        </svg>
        <blockquote>
          <p class="text-xs lg:text-lg italic text-gray-500">
            Если у вас нет церкви, куда пойти, мы будем очень рады, если вы присоединитесь к
            трансляции нашего Богослужения. Но, если у вас есть пастор и церковь, которую вы
            поддерживаете, тогда посещайте вашу драгоценную церковь. Стойте с вашим пастором,
            помогайте ему всем, чем только можете. Поддерживайте его духовно. Поститесь и молитесь
            за него. Имейте доверие к нему, и Бог поведёт вашу церковь к славному Дню, прихода
            которого мы все ожидаем.
          </p>
        </blockquote>
      </figure>

      <div class="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-10">
        <div class="bg-white p-6 rounded-3xl">
          <router-link
            :to="{ name: 'VideoStreamingClient' }"
            type="button"
            class="wfg-btn-primary uppercase w-full"
          >
            смотреть трансляцию
          </router-link>
        </div>
        <div class="bg-white p-6 rounded-3xl">
          <router-link
            :to="{ name: 'AudioStreamingClient' }"
            type="button"
            class="wfg-btn-primary uppercase w-full"
            >слушать трансляцию</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useGetPredicationStatus } from '@/hooks/useGetPredicationStatus'
import { useTitle } from '@vueuse/core'
import { APP_NAME } from '@/constants/consts'

export default defineComponent({
  name: 'StreamingClientDirection',
  methods: { useGetPredicationStatus },
  components: {},

  setup() {
    const store = useStore()
    useTitle('Трансляция - ' + APP_NAME)
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
