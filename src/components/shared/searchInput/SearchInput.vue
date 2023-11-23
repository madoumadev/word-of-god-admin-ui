<script>
import { useDebounce } from '../../../utils/useDebounce'

export default {
  name: 'SearchInput',
  data() {
    return {
      searchQuery: ''
    }
  },
  watch: {
    searchQuery: {
      immediate: true,
      deep: true,
      handler(newValue) {
        this.debounceSearch(() =>
          this.$store.dispatch('clientVideosStore/setSearchQuery', newValue)
        )
      }
    }
  },

  methods: {
    debounceSearch: useDebounce(function doSearch(callback) {
      callback()
    }, 300)
  }
}
</script>

<template>
  <input type="text" class="wfg-input" v-model="searchQuery" placeholder="Поиск..." />
</template>

<style scoped></style>
