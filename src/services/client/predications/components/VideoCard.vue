<script setup>
defineProps({ video: Object })
</script>

<template>
  <router-link
    :to="{
      name: 'PredicationsView',
      params: { videoId: video.snippet.resourceId.videoId }
    }"
    class="grid grid-cols-7 gap-4"
  >
    <div class="col-end-1 relative">
      <img
        :src="video.snippet.thumbnails.default.url"
        :class="`w-[${video.snippet.thumbnails.default.width}px] h-[${video.snippet.thumbnails.default.height}px] object-cover rounded-xl`"
        alt=""
      />
      <span class="bg-black text-xs px-1.5 text-white absolute bottom-1 right-1">10:34</span>
    </div>
    <div :title="video.snippet.title" class="col-span-6 text-gray-500 text-sm">
      <span class="line-clamp-4">{{ video.snippet.title }}</span>
    </div>
  </router-link>
</template>
