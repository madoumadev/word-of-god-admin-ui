<script>
import { computed, defineComponent, onMounted } from 'vue'
import { mapGetters, useStore } from 'vuex'
import AsideNavLayout from '@/components/shared/AsideNavLayout.vue'
import HeroIcon from '@/components/icons/HeroIcon.vue'
import timestampToLocalTime from '../../../../utils/timestampToLocalTime'
import NoData from '../../../../components/shared/NoData.vue'

export default defineComponent({
  name: 'ClientStreamingAsideNav',
  methods: { timestampToLocalTime },
  components: { NoData, HeroIcon, AsideNavLayout },

  computed: {
    ...mapGetters({
      videosList: 'predicationsStore/videosList'
    })
  },

  setup() {
    const store = useStore()
    const live = computed(() => store.getters['predicationsStore/liveStream'])

    onMounted(() => {
      store.dispatch('predicationsStore/getVideoLive')
    })

    return {
      live
    }
  }
})
</script>

<template>
  <AsideNavLayout class="bg-white">
    <div v-if="live" class="mt-4 flex flex-col p-6 overflow-hidden space-y-10 divide-y h-full">
      <div class="flex flex-col">
        <p class="capitalize text-gray-500 text-sm mb-4">БЛИЖАЙШАЯ ТРАНСЛЯЦИЯ</p>
        <div class="inline-flex items-center mb-2 space-x-2">
          <span class="w-6 h-6">
            <HeroIcon icon-type="outline" icon-name="CalendarIcon" class="w-4 h-5 text-gray-500" />
          </span>
          <p class="text-sm text-black capitalize" v-if="live?.snippet && live?.snippet?.localized">
            {{ live?.snippet?.localized?.title }}
          </p>
        </div>
        <div class="inline-flex items-center space-x-2">
          <span class="w-6 h-6">
            <HeroIcon icon-type="outline" icon-name="ClockIcon" class="w-4 h-5 text-gray-500" />
          </span>
          <p class="text-sm capitalize text-black">
            В {{ timestampToLocalTime(live?.snippet?.publishedAt?.value)?.toString() }}
          </p>
        </div>
      </div>

      <div class="flex flex-col space-y-2 pt-4">
        <p class="uppercase text-gray-500 text-sm mb-4">СЛУЖЕНИЯ</p>
        <ul class="list-disc pl-4">
          <li class="text-sm text-black capitalize mb-2">ВОСКРЕСЕНЬЕ - 12:00,</li>
          <li class="text-sm text-black capitalize">СРЕДА - 19:00</li>
        </ul>
      </div>

      <div class="flex flex-col space-y-2 pt-4">
        <p class="uppercase text-gray-500 text-sm mb-4">КОНТАКТЫ</p>
        <div class="">
          <img src="../../../../assets/email.png" class="w-34 email-addr scale-110" alt="email" />
        </div>
      </div>
    </div>
    <NoData v-else />
  </AsideNavLayout>
</template>
