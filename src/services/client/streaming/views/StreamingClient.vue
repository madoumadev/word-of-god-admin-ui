<template>
  <div class="overflow-y-auto h-full">
    <div>streaming page</div>
  </div>
</template>
<script>
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useGetPredicationStatus } from '@/hooks/useGetPredicationStatus'
import { useTitle } from '@vueuse/core'
import { APP_NAME } from '@/constants/consts'

export default defineComponent({
  name: 'StreamingClient',
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
