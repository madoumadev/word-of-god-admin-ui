<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AsideNavDesktopComponent'
})
</script>

<template>
  <div class="w-[250px] border-r-2 h-full hidden sm:block">
    <div class="space-y-2 mt-4 flex flex-col">
      <router-link :to="{ name: 'HomeView' }" class="link-class">Рабочий стол </router-link>
      <router-link :to="{ name: 'PredicationsListView' }" class="link-class"> Видео </router-link>
      <router-link :to="{ name: 'StreamingView' }" class="link-class"> Трансляция </router-link>
    </div>
  </div>
</template>

<style scoped></style>
