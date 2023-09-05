<template>
  <div class="flex justify-between mb-4">
    <slot name="left-side" />
    <div class="flex space-x-2 items-center">
      <slot name="right-side"> </slot>
    </div>
  </div>
</template>
<script setup></script>
