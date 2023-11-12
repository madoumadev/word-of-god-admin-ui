<template>
  <div class="overflow-y-auto h-full sm:p-0" v-if="live">
    <div class="flex lg:mt-3 mt-4 sm:my-2 flex-col">
      <h1 class="capitalize mb-5 lg:px-0 px-4">видеотрансляция</h1>
      <div class="inline-flex space-x-2 bg-white px-4 rounded-md py-2">
        <span
          class="block text-xs bg-red-600 border-red-300 rounded-full flex-shrink-0 mt-1 lg:mt-3 h-5 w-5 border-2 animate-pulse"
        >
        </span>
        <div class="flex lg:flex-row flex-col lg:justify-between lg:items-center w-full">
          <h1 class="line-clamp-1" v-if="live.snippet">{{ live.snippet.title }}</h1>
        </div>
      </div>
    </div>

    <div class="w-full sticky top-0 z-10">
      <div class="aspect-w-16 aspect-h-9">
        <iframe
          :src="`https://www.youtube.com/embed/${live.id}`"
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
import {computed, defineComponent, onBeforeMount} from 'vue'
import { useGetPredicationStatus } from '@/hooks/useGetPredicationStatus'
import getFormattedDate from '../../../../utils/getFormattedDate'
import store from "@/store";
import {useStore} from "vuex";
import {useRoute} from "vue-router";

export default defineComponent({
  name: 'VideoStreamingClient',
  methods: { getFormattedDate, useGetPredicationStatus },

  setup() {
    const store = useStore()
    const route = useRoute()
    const live = computed(() => store.getters['predicationsStore/liveStream'])
    onBeforeMount(() => {
      store.dispatch('predicationsStore/getVideoLive')
    })

    return {
      live,
    }
  },

})
</script>
