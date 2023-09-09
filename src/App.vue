<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col h-screen overflow-hidden relative">
    <router-view name="header" />
    <main class="h-full overflow-y-auto">
      <div class="max-w-screen-7xl mx-auto flex relative z-50 h-full overflow-hidden">
        <router-view name="asideNav" />
        <div class="overflow-y-auto flex-1">
          <router-view class="p-4" />
        </div>
      </div>
    </main>
  </div>
</template>
