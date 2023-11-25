<template>
  <div class="">
    <div class="flex justify-between items-center">
      <h5 class="text-2xl text-gray-900">Записи</h5>
      <!-- <button type="button" @click.prevent="handleOpenAddVideo" class="wfg-btn-primary hidden">
        Добавить запись
      </button>-->
    </div>

    <!-- <ModalComponent>
      <AddVideoForm @onSaveVideo="saveVideo" />
    </ModalComponent>-->

    <div class="relative overflow-x-auto pt-6">
      <!--   desktop   -->
      <table v-if="!isLoading" class="w-full text-sm text-left text-gray-500 hidden sm:table">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">Название</th>
            <th scope="col" class="px-6 py-3">Проповедник</th>
            <th scope="col" class="px-6 py-3">Ссылка</th>
            <th scope="col" class="px-6 py-3">Дата</th>
          </tr>
        </thead>
        <tbody class="[&>*:nth-child(even)]:bg-gray-100 [&>*:nth-child(odd)]:bg-white">
          <tr
            v-for="video in videosList"
            :key="video?.snippet?.resourceId?.videoId"
            class="border-b"
          >
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {{ video?.snippet?.resourceId?.videoId }}
            </th>
            <td class="px-6 py-4">
              <span :title="getVideoTitle(video?.snippet?.title)" class="line-clamp-1">{{
                getVideoTitle(video?.snippet?.title)
              }}</span>
            </td>
            <td class="px-6 py-4">{{ video?.snippet?.description }}</td>
            <td class="px-6 py-4">
              <a :href="YOUTUBE_WATCH + video?.snippet?.resourceId?.videoId" target="_blank">
                <LinkIcon class="w-6 h-6 text-primary ml-4" />
              </a>
            </td>
            <td class="px-6 py-4">
              {{ timestampToLocalTime(video?.snippet?.publishedAt?.value, true) }}
            </td>
            <td class="px-6 py-6 hidden">
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
      <LoadingComponent v-if="isLoading" />

      <div class="sm:hidden">
        <!--   mobile   -->
        <ul v-if="!isLoading" role="list" class="space-y-4">
          <li
            v-for="video in videosList"
            :key="video?.snippet?.resourceId?.videoId"
            class="p-4 border rounded-2xl"
          >
            <div class="flex items-center space-x-4">
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 line-clamp-2">
                  {{ getVideoTitle(video?.snippet?.title) }}
                </p>
                <p class="text-sm text-gray-500 truncate">{{ video?.snippet?.description }},</p>
                <p class="text-sm text-gray-500 truncate"></p>
                <div
                  v-if="video?.snippet?.resourceId?.videoId"
                  class="flex justify-between items-center mt-2"
                >
                  <div>{{ timestampToLocalTime(video?.snippet?.publishedAt?.value, true) }}</div>
                  <a
                    :href="YOUTUBE_WATCH + video?.snippet?.resourceId?.videoId"
                    target="_blank"
                    class="inline-flex items-center text-sm bg-gray-200 rounded-2xl p-2"
                  >
                    <span class="lowercase">ССЫЛКА</span>
                    <LinkIcon class="w-4 h-4 text-primary ml-4" />
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
import { computed, defineComponent, onBeforeMount, ref } from 'vue'
import { useStore } from 'vuex'
import { LinkIcon, PencilIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { getVideoTitle } from '../../../../utils/getVideoTitle'
import LoadingComponent from '../../../../components/shared/LoadingComponent.vue'
import timestampToLocalTime from '../../../../utils/timestampToLocalTime'
import { YOUTUBE_WATCH } from '../../../../http/config'
import { useGetPredicationStatus } from '../../../../hooks/useGetPredicationStatus'
import AddVideoForm from '../components/AddPredicationForm.vue'
import ModalComponent from '../../../../components/shared/BaseModal/ModalComponent.vue'

export default defineComponent({
  name: 'PredicationsListView',
  methods: { timestampToLocalTime, getVideoTitle, useGetPredicationStatus },
  components: {
    ModalComponent,
    AddVideoForm,
    LoadingComponent,

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

    onBeforeMount(() => {
      store.dispatch('clientVideosStore/getVideosInAdmin')
    })

    return {
      predicationsIds: computed(() => store.getters['predicationsStore/predicationsIds']),
      saveVideo,
      YOUTUBE_WATCH,
      isAllChecked,
      videosList: computed(() => store.getters['clientVideosStore/filteredVideos']),
      isLoading: computed(() => store.getters['clientVideosStore/loading']),
      handleOpenAddVideo: () => store.commit('SET_IS_OPEN', !store.getters['isOpen'])
    }
  }
})
</script>
