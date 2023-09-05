<template>
  <div class="flex h-full w-full justify-center items-center">Videos</div>
</template>
<script>
import { defineComponent, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'VideosView',

  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('getComments')
    })
  }
})
</script>
