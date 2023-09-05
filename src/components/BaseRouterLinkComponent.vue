<script setup>
defineProps({
  rootName: String,
  isPrimary: {
    type: Boolean,
    default: false
  },
  label: String
})
</script>

<template>
  <router-link
    :to="{ name: rootName }"
    :class="{ 'bg-gray-100 hover:bg-gray-200 transition-colors': isPrimary }"
    class="inline-flex items-center p-2 text-gray-500 group-hover:text-black space-x-2"
  >
    <slot />
    <span class="text-sm capitalize">{{ label }}</span>
  </router-link>
</template>
