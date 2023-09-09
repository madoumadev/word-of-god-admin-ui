<template>
  <div class="overflow-y-auto h-full">
    <div class="flex justify-between items-center">
      <h5 class="text-2xl text-gray-900">Записи</h5>
      <button
        type="button"
        @click.prevent="handleOpenAddVideo"
        class="inline-flex items-center rounded-xl text-white px-4 py-2 hover:bg-blue-800 bg-blue-600 transition-colors"
      >
        Добавить запись
      </button>
    </div>

    <VideoModalComponent>
      <AddVideoForm @onSaveVideo="saveVideo" />
    </VideoModalComponent>

    <div class="relative overflow-x-auto pt-6">
      <!--   desktop   -->
      <table class="w-full text-sm text-left text-gray-500 hidden sm:table">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr class="">
            <th class="px-6 py-3">
              <div class="flex items-center justify-center h-full w-full">
                <input
                  id="checkAllPredications"
                  type="checkbox"
                  v-model="isAllChecked"
                  class="mt-1 border accent-black border-gray-50 rounded w-5 h-5 outline-none"
                />
              </div>
            </th>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">Название</th>
            <th scope="col" class="px-6 py-3">Проповедник</th>
            <th scope="col" class="px-6 py-3">Активность</th>
            <th scope="col" class="px-6 py-3">Ссылка</th>
            <th scope="col" class="px-6 py-3">Дата</th>
            <th scope="col" class="px-6 py-3">Действия</th>
          </tr>
        </thead>
        <tbody
          class="border rounded-xl [&>*:nth-child(even)]:bg-gray-100 [&>*:nth-child(odd)]:bg-white"
        >
          <tr v-for="video in videosList" :key="video.id" class="border-b">
            <td @click.stop="() => {}">
              <div class="flex items-center justify-center h-full w-full">
                <input
                  type="checkbox"
                  v-model="predicationsIds"
                  :value="video.id"
                  class="mt-1 border accent-black border-gray-50 rounded w-5 h-5 outline-none"
                />
              </div>
            </td>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {{ video.id }}
            </th>
            <td class="px-6 py-4 line-clamp-1">{{ video.title }}</td>
            <td class="px-6 py-4">{{ video.preacher }}</td>
            <td class="px-6 py-4">
              {{ useGetPredicationStatus(video.status) }}
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
              <button
                type="button"
                class="p-1.5 hover:bg-gray-600 text-gray-900 border hover:text-white rounded-xl"
              >
                <PencilIcon class="w-4 h-4" />
              </button>
              <button
                type="button"
                class="ml-2 p-1.5 hover:bg-red-600 border rounded-xl text-red-500 hover:text-white"
              >
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
                  АКТИВНОСТЬ : {{ useGetPredicationStatus(video.status) }}
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
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { LinkIcon, PencilIcon, XMarkIcon, DocumentTextIcon } from '@heroicons/vue/24/outline'
import { useGetPredicationStatus } from '@/hooks/useGetPredicationStatus'
import VideoModalComponent from '@/components/shared/BaseModal/ModalComponent.vue'
import AddVideoForm from '@/services/predications/components/AddPredicationForm.vue'

export default defineComponent({
  name: 'VideosView',
  methods: { useGetPredicationStatus },
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

    const isAllChecked = ref(false)
    function saveVideo(form) {
      console.log(form)
    }

    return {
      predicationsIds: computed(() => store.getters['predicationsStore/predicationsIds']),
      saveVideo,
      isAllChecked,
      videosList: computed(() => store.getters['predicationsStore/videosList']),
      handleOpenAddVideo: () => store.commit('SET_IS_OPEN', !store.getters['isOpen'])
    }
  },

  watch: {
    predicationsIds(newValue) {
      const $dom = document.querySelector('#checkAllPredications')
      if (newValue.length === 0) {
        $dom.checked = false
        $dom.indeterminate = false
      } else if (newValue.length === this.videosList.length) {
        $dom.checked = true
        $dom.indeterminate = false
      } else {
        $dom.checked = false
        $dom.indeterminate = true
      }
    },

    isAllChecked(checkState) {
      if (checkState) {
        this.videosList.forEach((p) => {
          if (!this.videosList.includes(p.id)) {
            this.$store.commit('predicationsStore/PUSH_PREDICATION_ID', p.id)
          }
        })
      } else {
        this.$store.commit('predicationsStore/SET_PREDICATION_IDS_SELECTION', [])
      }
    }
  }
})
</script>
