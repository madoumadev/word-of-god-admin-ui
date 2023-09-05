<template>
  <div class="h-full w-full">
    <div class="relative overflow-x-auto pt-4">
      <table class="w-full text-sm text-left text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">Название</th>
            <th scope="col" class="px-6 py-3">Проповедник</th>
            <th scope="col" class="px-6 py-3">Активность</th>
            <th scope="col" class="px-6 py-3">Ссылка</th>
            <th scope="col" class="px-6 py-3">Действия</th>
          </tr>
        </thead>
        <tbody class="[&>*:nth-child(even)]:bg-gray-100 [&>*:nth-child(odd)]:bg-white">
          <tr v-for="video in videosList" :key="video.id" class="border-b oven:">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {{ video.id }}
            </th>
            <td class="px-6 py-4">{{ video.title }}</td>
            <td class="px-6 py-4">{{ video.preacher }}</td>
            <td class="px-6 py-4">
              <span class="line-clamp-1">
                {{ useGetVideoStatus(video.status) }}
              </span>
            </td>
            <td class="px-6 py-4">
              <a :href="video.link" target="_blank">
                <LinkIcon class="w-5 h-5 hover:underline hover:text-blue-900 text-blue-500" />
              </a>
            </td>
            <td class="px-6 py-6 flex">
              <button type="button" class="p-1.5 bg-blue-600 text-white hover:bg-blue-700">
                <PencilIcon class="w-4 h-4" />
              </button>
              <button type="button" class="ml-2 p-1.5 bg-red-600 text-white hover:bg-red-700">
                <XMarkIcon class="w-4 h-4" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { LinkIcon, PencilIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useGetVideoStatus } from '@/use/useGetVideoStatus'

export default defineComponent({
  name: 'VideosView',
  methods: { useGetVideoStatus },
  components: { LinkIcon, PencilIcon, XMarkIcon },

  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('getComments')
    })

    return {
      videosList: computed(() => store.getters['videosList'])
    }
  }
})
</script>
