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
  },

  created() {
    let params = this.$route.params

    if (params && params?.videoId) return

    if (this.videosList.length) {
      this.$router.push({
        name: 'PredicationsView',
        params: { videoId: this.videosList[0]?.snippet.resourceId.videoId }
      })
    }
  }
})
</script>

<template>
  <AsideNavLayout class="overflow-y-auto h-[95%]">
    <div class="px-3 sticky top-0 z-10">
      <input type="search" class="wfg-input" placeholder="Search" />
    </div>
    <div class="flex flex-col py-2">
      <ul class="px-3 space-y-2">
        <li
          v-for="video in videosList"
          :key="video.id"
          :class="[
            params?.videoId === video.snippet.resourceId.videoId ? 'border-2 border-gray-500' : '',
            'py-2  pl-2 rounded-xl transition-colors cursor-pointer bg-white'
          ]"
        >
          <VideoCard :video="video" />
        </li>
      </ul>
    </div>
  </AsideNavLayout>
</template>
