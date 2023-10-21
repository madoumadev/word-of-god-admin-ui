<template>
  <div class="overflow-y-auto h-full sm:p-0">
    <div class="px-4 flex mt-10 sm:my-2 flex-col">
      <div class="inline-flex space-x-2">
        <span
          class="block text-xs bg-red-600 border-red-300 rounded-full h-6 w-6 border-2 animate-pulse"
        >
        </span>
        <div>
          <h1 class="line-clamp-1">Молодежный лагерь в Раменском</h1>
          <span class="text-gray-400 py-2">{{
            getFormattedDate('2023-09-26T07:58:30.996+0200')
          }}</span>
        </div>
      </div>
    </div>

    <div class="bg-white sm:px-4 py-4 sm:rounded-3xl 2xl:w-3/4 w-full sticky top-0 z-10">
      <div class="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.youtube.com/embed/AsrYNSIEnZE"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useGetPredicationStatus } from '@/hooks/useGetPredicationStatus'
import getFormattedDate from '../../../../utils/getFormattedDate'

export default defineComponent({
  name: 'VideoStreamingClient',
  methods: { getFormattedDate, useGetPredicationStatus },

  setup() {}
})
</script>
