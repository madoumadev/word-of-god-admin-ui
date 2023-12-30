<template>
  <div class="h-full overflow-y-auto">
    <div class="flex my-2 flex-col">
      <h1 class="mb-5 lg:px-0 px-4">Аудиотрансляция</h1>
    </div>

    <RadioPlayer :song="radio" />

    <div class="mt-8 lg:px-0 px-4">
      <router-link
        :to="{ name: 'VideoStreamingClient' }"
        class="text-blue-500 hover:underline hover:text-blue-900 capitalize"
        >видеотрансляция</router-link
      >
    </div>
  </div>
</template>
<script>
import { computed, defineComponent, onMounted } from 'vue'
import getFormattedDate from '../../../../utils/getFormattedDate'
import { useStore } from 'vuex'
import RadioPlayer from '../components/RadioPlayer.vue'

export default defineComponent({
  name: 'AudioStreamingClient',
  methods: { getFormattedDate },
  components: { RadioPlayer },

  setup() {
    const store = useStore()
    const radio = computed(() => store.getters['predicationsStore/radio'])

    onMounted(() => {
      store.dispatch('predicationsStore/getRadios', 4)
    })

    return {
      radio
    }
  }
})
</script>
