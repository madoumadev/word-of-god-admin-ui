<template>
  <div class="flex w-full lg:justify-center sm:items-center h-full p-4 sm:p-0">
    <div class="max-w-screen-sm w-full mx-auto mt-10 sm:mt-0">
      <div class="relative z-10">
        <div
          class="bg-white border-slate-100 transition-all duration-500 border-b rounded-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8"
        >
          <div class="flex items-center space-x-4">
            <button
              type="button"
              class="bg-white text-primary transition-all duration-500 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center"
              aria-label="Pause"
            >
              <svg width="30" height="32" fill="currentColor">
                <rect x="6" y="4" width="4" height="24" rx="2"></rect>
                <rect x="20" y="4" width="4" height="24" rx="2"></rect>
              </svg>
            </button>
            <div class="min-w-0 flex-auto space-y-1 font-semibold">
              <div class="px-4 flex flex-col">
                <div class="inline-flex space-x-2">
                  <span
                    class="block text-xs bg-red-600 border-red-300 flex-shrink-0 rounded-full h-6 w-6 border-2 animate-pulse"
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
            </div>
          </div>
          <div class="space-y-2">
            <div class="relative">
              <div class="bg-slate-100 transition-all duration-500 rounded-full overflow-hidden">
                <div
                  class="bg-primary transition-all duration-500 w-1/2 h-2"
                  role="progressbar"
                  aria-label="music progress"
                  aria-valuenow="1456"
                  aria-valuemin="0"
                  aria-valuemax="4550"
                ></div>
              </div>
              <div
                class="ring-primary transition-all duration-500 ring-2 absolute left-1/2 top-1/2 w-4 h-4 -mt-2 -ml-2 flex items-center justify-center bg-white rounded-full shadow"
              >
                <div
                  class="w-1.5 h-1.5 bg-primary transition-all duration-500 rounded-full ring-1 ring-inset ring-primary"
                ></div>
              </div>
            </div>
            <div class="flex justify-between text-sm leading-6 font-medium tabular-nums">
              <div class="text-primary transition-all duration-500">24:16</div>
              <div class="text-primary transition-all duration-500">75:50</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { useGetPredicationStatus } from '@/hooks/useGetPredicationStatus'
import getFormattedDate from '../../../../utils/getFormattedDate'

export default defineComponent({
  name: 'AudioStreamingClient',
  methods: { getFormattedDate, useGetPredicationStatus },
  components: {},

  setup() {}
})
</script>
