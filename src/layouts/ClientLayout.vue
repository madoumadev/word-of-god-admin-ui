<template>
  <div class="flex flex-col h-screen overflow-hidden relative max-w-screen-xl mx-auto w-full">
    <HeaderComponent />
    <main class="h-full overflow-y-auto lg:mt-6">
      <div v-if="!isLoading" class="flex relative h-full overflow-hidden">
        <ClientStreamingAsideNav v-if="!isVideoRoutes(route.name)" />
        <ClientVideoAsideNav v-else />
        <div class="overflow-y-auto flex-1">
          <slot />
        </div>
      </div>
      <LooadingComponent v-else />
    </main>
  </div>
</template>
<script setup>
import HeaderComponent from '../components/header/HeaderComponent.vue'
import ClientStreamingAsideNav from '../services/client/streaming/components/ClientStreamingAsideNav.vue'
import { useRoute } from 'vue-router'
import ClientVideoAsideNav from '../services/client/predications/components/ClientVideoAsideNav.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import LooadingComponent from '../components/shared/LoadingComponent.vue'

const route = useRoute()
const store = useStore()
const isLoading = computed(() => store.getters['clientVideosStore/loading'])

const isVideoRoutes = (routeName) => {
  return ['PredicationsView'].includes(routeName)
}
</script>
