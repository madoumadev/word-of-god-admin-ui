<template>
  <div class="overflow-y-auto h-full">
    <div class="flex justify-between items-center">
      <h5 class="text-2xl text-gray-900">Трансляция</h5>
    </div>

    <div class="w-full sm:w-1/2 mt-6 bg-white p-6 rounded-xl">
      <div class="space-y-2">
        <label for="name">YouTube video ID</label>
        <div>
          <input type="text" id="streamId" placeholder="9AEN9ahj0ts" class="wfg-input" />
        </div>
      </div>
      <div class="flex justify-start items-center space-x-4 mt-5">
        <button type="submit" class="wfg-btn-primary">Применить</button>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'StreamingView',

  setup() {}
})
</script>
