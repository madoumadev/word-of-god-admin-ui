<script>
import { defineComponent } from 'vue'
import HeroIcon from '@/components/icons/HeroIcon.vue'

export default defineComponent({
  name: 'AdminAsideNav',
  components: { HeroIcon },

  data() {
    return {
      menusRoutes: [
        {
          name: 'DashboardPage',
          label: 'Рабочий стол',
          icon: 'ComputerDesktopIcon'
        },
        {
          name: 'PredicationsListView',
          label: 'Видео',
          icon: 'PlayIcon'
        },
        {
          name: 'StreamingView',
          label: 'Трансляция',
          icon: 'VideoCameraIcon'
        }
      ]
    }
  },
  computed: {
    currentRoute() {
      return this.$route.name
    }
  }
})
</script>

<template>
  <div class="mt-4 flex flex-col">
    <router-link
      v-for="menu in menusRoutes"
      :key="menu.name"
      :to="{ name: menu.name }"
      exact-active-class="menu-item-desktop-active"
      class="link-class menu-item-desktop"
    >
      <HeroIcon :icon-name="menu.icon" icon-type="outline" class="w-6 h-6" />
      <span> {{ menu.label }}</span>
    </router-link>
  </div>
</template>
