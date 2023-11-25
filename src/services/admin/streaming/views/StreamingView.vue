<template>
  <div class="overflow-y-auto h-full">
    <div class="flex justify-between items-center">
      <h5 class="text-2xl text-gray-900">Трансляция</h5>
    </div>

    <div
      class="flex lg:flex-row flex-col lg:justify-between lg:items-center bg-gray-50 lg:p-6 mt-6"
    >
      <form @submit.prevent="handeSubmit" class="lg:bg-white p-6 rounded-xl w-full lg:w-1/2">
        <div class="space-y-2">
          <label for="name">YouTube video ID</label>
          <div>
            <input
              type="text"
              v-model="v$.liveForm.liveId.$model"
              id="streamId"
              class="wfg-input"
            />
            <ErrorComponent :errors="v$.liveForm.liveId.$errors" />
          </div>
        </div>
        <div class="flex justify-start items-center space-x-4 mt-5">
          <button type="submit" class="wfg-btn-primary">
            {{ isLoading ? 'В работе...' : 'Применить' }}
          </button>
        </div>
      </form>

      <div class="mt-8 p-6 lg:p-0 lg:mt-0">
        <h5 class="capitalize pb-2">ближайшая трансляция</h5>
        <div class="bg-white w-full relative">
          <iframe
            :src="`https://www.youtube.com/embed/${live?.id}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, onBeforeMount, reactive, watch } from 'vue'
import { useStore } from 'vuex'
import { helpers, required } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import ErrorComponent from '../../../../components/shared/ErrorComponent.vue'
export default defineComponent({
  name: 'StreamingView',
  components: { ErrorComponent },

  setup() {
    const store = useStore()
    const liveForm = reactive({
      liveId: null
    })

    const rules = computed(() => ({
      liveForm: {
        liveId: {
          required: helpers.withMessage('Это обязательное поле', required)
        }
      }
    }))

    const v$ = useVuelidate(rules, { liveForm })

    const handeSubmit = async () => {
      v$.value.$touch()

      if (!v$.value.$error) {
        await store.dispatch('adminStreamStore/putLiveId', liveForm.liveId)
      }
    }

    const live = computed(() => store.getters['predicationsStore/liveStream'])

    watch(
      () => live.value,
      (newLive) => {
        liveForm.liveId = newLive?.id
      },
      { immediate: true }
    )
    onBeforeMount(() => {
      store.dispatch('predicationsStore/getVideoLive')
    })

    return {
      live,
      liveForm,
      handeSubmit,
      v$,
      isLoading: computed(() => store.getters['adminStreamStore/isLoading'])
    }
  }
})
</script>
