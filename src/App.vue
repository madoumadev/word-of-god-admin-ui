<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="h-screen w-full overflow-y-auto">
    <header class="sticky top-0 bg-white z-10">
      <router-view name="header" />
    </header>

    <main class="max-w-screen-xl mx-auto px-4 py-6">
      <router-view />
    </main>
  </div>
</template>
