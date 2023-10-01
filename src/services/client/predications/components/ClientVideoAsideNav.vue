<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import AsideNavLayout from '@/components/shared/AsideNavLayout.vue'
import getFormattedDate from '@/utils/getFormattedDate'

export default defineComponent({
  name: 'ClientVideoAsideNav',
  methods: { getFormattedDate },
  components: { AsideNavLayout },

  computed: {
    ...mapGetters({
      videosList: 'clientVideosStore/videosList'
    })
  }
})
</script>

<template>
  <AsideNavLayout class="overflow-y-auto h-full">
    <div class="px-3 py-4 sticky top-0 z-10 bg-white">
      <input type="search" class="wfg-input" placeholder="Search" />
    </div>
    <div class="flex flex-col py-2">
      <ul class="px-3 space-y-2">
        <li
          v-for="video in videosList"
          :key="video.id"
          class="py-2 hover:bg-gray-50 pl-2 rounded-xl transition-colors"
        >
          <router-link
            :to="{
              name: 'PredicationsView',
              params: { videoId: video.snippet.resourceId.videoId }
            }"
            class="grid grid-cols-7 gap-4"
          >
            <div class="col-end-1 relative">
              <img
                :src="video.snippet.thumbnails.default.url"
                :class="`w-[${video.snippet.thumbnails.default.width}px] h-[${video.snippet.thumbnails.default.height}px] object-cover rounded-xl`"
                alt=""
              />
              <span class="bg-black text-xs px-1.5 text-white absolute bottom-1 right-1"
                >10:34</span
              >
            </div>
            <div :title="video.snippet.title" class="col-span-6 text-gray-500 text-sm">
              <span class="line-clamp-4">{{ video.snippet.title }}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </AsideNavLayout>
</template>
