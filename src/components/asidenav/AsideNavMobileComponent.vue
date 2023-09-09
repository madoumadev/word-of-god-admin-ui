<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import { PowerIcon } from '@heroicons/vue/24/outline'

export default defineComponent({
  name: 'AsideNavMobileComponent',
  components: { PowerIcon },
  computed: {
    ...mapGetters({
      isToggleMobileMenu: 'isToggleMobileMenu'
    })
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
    class="bg-white w-full sm:hidden z-50 flex justify-between flex-col h-full"
  >
    <div class="space-y-2 flex flex-col">
      <router-link @click="handleMenuClicked" :to="{ name: 'HomeView' }" class="link-class"
        >Рабочий стол
      </router-link>
      <router-link
        @click="handleMenuClicked"
        :to="{ name: 'PredicationsListView' }"
        class="link-class"
      >
        Видео
      </router-link>
      <router-link @click="handleMenuClicked" :to="{ name: 'StreamingView' }" class="link-class">
        Трансляция
      </router-link>
    </div>

    <div class="bg-gray-100 py-4 px-2 inline-flex items-center space-x-4">
      <router-link @click="handleMenuClicked" :to="{ name: 'ProfileView' }">
        <span>Godran</span>
      </router-link>
      <button type="button">
        <PowerIcon class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<style scoped></style>
