<script setup>
import LoadingComponent from './components/shared/LoadingComponent.vue'
</script>

<template>
  <div class="bg-gray-50">
    <Transition name="fade" mode="out-in">
      <router-view v-slot="{ Component }">
        <component :is="Component"></component>
      </router-view>
    </Transition>
  </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
