<script>
import { defineComponent } from 'vue'
import AsideNavLayout from '@/components/shared/AsideNavLayout.vue'
import getFormattedDate from '@/utils/getFormattedDate'
import VideoCard from './VideoCard.vue'
import { mapGetters } from 'vuex'
import NoData from '../../../../components/shared/NoData.vue'
import SearchInput from '../../../../components/shared/searchInput/SearchInput.vue'

export default defineComponent({
  name: 'ClientTestimonyAsideNav',
  components: { SearchInput, NoData, VideoCard, AsideNavLayout },

  computed: {
    ...mapGetters({
      filteredVideos: 'clientVideosStore/filteredVideos'
    }),
    params() {
      return this.$route.params
    }
  },

  methods: {
    getFormattedDate
  }
})
</script>

<template>
  <AsideNavLayout class="bg-white py-4">
    <div class="px-3 sticky top-0 z-10">
      <SearchInput />
    </div>
    <div
      v-if="filteredVideos && filteredVideos.length"
      class="flex flex-col py-2 overflow-y-auto h-full mt-3"
    >
      <TransitionGroup tag="ul" name="fade" class="px-3 space-y-2 mb-12">
        <li
          v-for="video in filteredVideos"
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
      </TransitionGroup>
    </div>
    <NoData v-else />
  </AsideNavLayout>
</template>
