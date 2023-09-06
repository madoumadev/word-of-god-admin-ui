<template>
  <div class="h-full w-full overflow-y-auto">
    <div class="flex justify-between items-center">
      <h5 class="text-2xl font-bold leading-none text-gray-900">Записи</h5>
      <button
        type="button"
        @click.prevent="handleOpenAddVideo"
        class="inline-flex items-center text-white px-2 py-1.5 hover:bg-green-800 bg-green-600 transition-colors"
      >
        Добавить запись
      </button>
    </div>

    <VideoModalComponent>
      <AddVideoForm @onSaveVideo="saveVideo" />
    </VideoModalComponent>

    <div class="relative overflow-x-auto pt-4">
      <!--   desktop   -->
      <table class="w-full text-sm text-left text-gray-500 hidden sm:table">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">Название</th>
            <th scope="col" class="px-6 py-3">Проповедник</th>
            <th scope="col" class="px-6 py-3">Активность</th>
            <th scope="col" class="px-6 py-3">Ссылка</th>
            <th scope="col" class="px-6 py-3">Ссылка</th>
            <th scope="col" class="px-6 py-3">Дата</th>
            <th scope="col" class="px-6 py-3">Действия</th>
          </tr>
        </thead>
        <tbody class="[&>*:nth-child(even)]:bg-gray-100 [&>*:nth-child(odd)]:bg-white">
          <tr v-for="video in videosList" :key="video.id" class="border-b oven:">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {{ video.id }}
            </th>
            <td class="px-6 py-4 line-clamp-1">{{ video.title }}</td>
            <td class="px-6 py-4">{{ video.preacher }}</td>
            <td class="px-6 py-4">
              {{ useGetVideoStatus(video.status) }}
            </td>
            <td class="px-6 py-4">
              <a :href="video.link" target="_blank">
                <LinkIcon class="w-5 h-5 hover:underline hover:text-blue-900 text-blue-500" />
              </a>
            </td>
            <td class="px-6 py-4">
              <a :href="video.link" target="_blank">
                <DocumentTextIcon
                  class="w-5 h-5 hover:underline hover:text-blue-900 text-blue-500"
                />
              </a>
            </td>
            <td class="px-6 py-4">
              {{ video.createdAt }}
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

      <div class="sm:hidden">
        <!--   mobile   -->
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700 space-y-4">
          <li v-for="video in videosList" :key="video.id" class="py-3">
            <div class="flex items-center space-x-4">
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 line-clamp-2">{{ video.title }}</p>
                <p class="text-sm text-gray-500 truncate">
                  {{ video.preacher }}, {{ video.createdAt }}
                </p>
                <p class="text-sm text-gray-500 truncate">
                  АКТИВНОСТЬ : {{ useGetVideoStatus(video.status) }}
                </p>
                <div class="flex space-x-2 mt-2">
                  <button
                    type="button"
                    class="p-1.5 bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center space-x-2 capitalize"
                  >
                    <PencilIcon class="w-4 h-4" />
                    <span>редактировать</span>
                  </button>
                  <button
                    type="button"
                    class="ml-2 p-1.5 bg-red-600 text-white hover:bg-red-700 inline-flex items-center space-x-2"
                  >
                    <XMarkIcon class="w-4 h-4" />
                    <span>Удалить</span>
                  </button>
                  <a
                    :href="video.link"
                    target="_blank"
                    class="bg-gray-100 inline-flex items-center px-4"
                  >
                    <LinkIcon class="w-5 h-5 hover:underline hover:text-blue-900 text-blue-500" />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { LinkIcon, PencilIcon, XMarkIcon, DocumentTextIcon } from '@heroicons/vue/24/outline'
import { useGetVideoStatus } from '@/use/useGetVideoStatus'
import VideoModalComponent from '@/components/VideoModalComponent.vue'
import AddVideoForm from '@/components/AddVideoForm.vue'

export default defineComponent({
  name: 'VideosView',
  methods: { useGetVideoStatus },
  components: {
    AddVideoForm,
    VideoModalComponent,
    DocumentTextIcon,
    LinkIcon,
    PencilIcon,
    XMarkIcon
  },

  setup() {
    const store = useStore()

    function saveVideo(form) {
      console.log(form)
    }

    return {
      saveVideo,
      videosList: computed(() => store.getters['videosList']),
      handleOpenAddVideo: () => store.commit('SET_IS_OPEN', !store.getters['isOpen'])
    }
  }
})
</script>
