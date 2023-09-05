<template>
  <router-view />
</template>
<script>
import { defineComponent, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'HomeView',

  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('getComments')
    })
  }
})
</script>
