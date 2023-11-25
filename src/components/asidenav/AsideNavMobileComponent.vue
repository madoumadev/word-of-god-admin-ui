<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import { PowerIcon } from '@heroicons/vue/24/outline'
import HeroIcon from '@/components/icons/HeroIcon.vue'

export default defineComponent({
  name: 'AsideNavMobileComponent',
  components: { HeroIcon, PowerIcon },
  computed: {
    ...mapGetters({
      isToggleMobileMenu: 'isToggleMobileMenu'
    }),
    currentRoute() {
      return this.$route.name
    }
  },
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

  methods: {
    handleMenuClicked() {
      this.$store.commit('SET_IS_TOGGLE_MOBILE_MENU', false)
    }
  }
})
</script>

<template>
  <div
    v-show="isToggleMobileMenu"
    class="bg-white w-full sm:hidden z-50 flex justify-between flex-col h-[100%]"
  >
    <div class="space-y-2 flex flex-col pt-4">
      <router-link
        @click="handleMenuClicked"
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

    <div class="bg-gray-100 py-4 px-2 inline-flex items-center space-x-4">
      <router-link @click="handleMenuClicked" :to="{ name: 'ProfileView' }">
        <span>Администратор</span>
      </router-link>
      <button type="button">
        <PowerIcon class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<style scoped></style>
