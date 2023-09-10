<script>
import { defineComponent } from 'vue'
import AsideNavDesktopComponent from '@/components/asidenav/AsideNavDesktopComponent.vue'
import AsideNavMobileComponent from '@/components/asidenav/AsideNavMobileComponent.vue'

export default defineComponent({
  name: 'AsideNavComponent',
  components: { AsideNavMobileComponent, AsideNavDesktopComponent }
})
</script>

<template>
  <AsideNavDesktopComponent />
  <AsideNavMobileComponent />
</template>
qs
