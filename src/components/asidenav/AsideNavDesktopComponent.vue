<script>
import { defineComponent } from 'vue'
import AsideNavLayout from '../shared/AsideNavLayout.vue'
import AdminAsideNav from '../../services/admin/partials/AdminAsideNav.vue'

export default defineComponent({
  name: 'AsideNavDesktopComponent',
  components: { AdminAsideNav, AsideNavLayout }
})
</script>

<template>
  <AsideNavLayout>
    <AdminAsideNav />
  </AsideNavLayout>
</template>

<style scoped></style>
