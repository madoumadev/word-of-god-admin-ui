<template>
  <div class="overflow-y-auto h-full sm:p-0">
    <div class="flex lg:mt-3 mt-4 sm:my-2 flex-col">
      <h1 class="capitalize mb-5 lg:px-0 px-4">видеотрансляция</h1>

      <div class="inline-flex space-x-2 bg-white px-4 rounded-md py-2">
        <span
          class="block text-xs bg-red-600 border-red-300 rounded-full flex-shrink-0 mt-1 lg:mt-3 h-5 w-5 border-2 animate-pulse"
        >
        </span>
        <div class="flex lg:flex-row flex-col lg:justify-between lg:items-center w-full">
          <h1 class="line-clamp-1">Молодежный лагерь в Раменском</h1>
          <span class="text-gray-400 py-2 lg:text-lg text-xs">{{
            getFormattedDate('2023-09-26T07:58:30.996+0200')
          }}</span>
        </div>
      </div>
    </div>

    <div class="w-full sticky top-0 z-10">
      <div class="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.youtube.com/embed/AsrYNSIEnZE"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div class="mt-8 lg:px-0 px-4">
      <router-link
        :to="{ name: 'AudioStreamingClient' }"
        class="text-blue-500 hover:underline hover:text-blue-900"
        >Аудиотрансляция</router-link
      >
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
