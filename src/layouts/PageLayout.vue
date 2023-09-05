<script>
export default {
  name: 'PageLayout'
}
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-5 gap-4">
    <div class="sm:col-span-1">
      <slot name="aside" />
    </div>
    <div class="sm:col-span-4 pb-6">
      <slot />
    </div>
  </div>
</template>
