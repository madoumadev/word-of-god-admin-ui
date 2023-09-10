<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import AsideNavLayout from '@/components/shared/AsideNavLayout.vue'

export default defineComponent({
  name: 'ClientStreamingAsideNav',
  components: { AsideNavLayout },

  computed: {
    ...mapGetters({
      videosList: 'predicationsStore/videosList'
    })
  }
})
</script>

<template>
  <AsideNavLayout>
    <div class="mt-4 flex flex-col">
      <ul>
        Streaming
      </ul>
    </div>
  </AsideNavLayout>
</template>
