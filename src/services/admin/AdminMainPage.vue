<script>
import HeaderComponent from '../../components/header/HeaderComponent.vue'
import AsideNavDesktopComponent from '../../components/asidenav/AsideNavDesktopComponent.vue'
import AsideNavMobileComponent from '../../components/asidenav/AsideNavMobileComponent.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'AdminMainPage',
  components: {
    AsideNavMobileComponent,
    AsideNavDesktopComponent,
    HeaderComponent
  },
  computed: {
    ...mapGetters({
      isToggleMobileMenu: 'isToggleMobileMenu'
    })
  }
}
</script>

<template>
  <div class="flex flex-col h-screen overflow-hidden relative max-w-screen-xl mx-auto w-full">
    <HeaderComponent />
    <main class="h-full overflow-y-auto lg:mt-6">
      <div class="flex relative h-full overflow-hidden">
        <AsideNavDesktopComponent />
        <AsideNavMobileComponent />
        <div
          v-if="!isToggleMobileMenu"
          class="overflow-y-auto h-[98%] flex-1 bg-white p-6 rounded-2xl"
        >
          <router-view />
        </div>
      </div>
    </main>
  </div>
</template>
