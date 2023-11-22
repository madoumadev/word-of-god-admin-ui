<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import AsideNavLayout from '@/components/shared/AsideNavLayout.vue'
import getFormattedDate from '@/utils/getFormattedDate'
import VideoCard from './VideoCard.vue'

export default defineComponent({
  name: 'ClientVideoAsideNav',
  methods: { getFormattedDate },
  components: { VideoCard, AsideNavLayout },

  computed: {
    ...mapGetters({
      videosList: 'clientVideosStore/videosList'
    }),

    params() {
      return this.$route.params
    }
  }
})
</script>

<template>
  <AsideNavLayout class="bg-white py-4">
    <div class="px-3 sticky top-0 z-10">
      <input type="search" class="wfg-input" placeholder="Search" />
    </div>
    <div class="flex flex-col py-2 overflow-y-auto h-full mt-3">
      <ul class="px-3 space-y-2 mb-12">
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
  </AsideNavLayout>
</template>
