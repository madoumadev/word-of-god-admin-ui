<template>
  <header class="w-full">
    <nav class="bg-white border-gray-200 py-4 shadow">
      <div class="flex items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a
          href=""
          @click="$router.push({ name: 'HomeView' })"
          class="hidden sm:inline-flex space-x-2"
        >
          <h1 class="font-bold uppercase hover:text-gray-900">Божье Слово верно</h1>
        </a>
        <div class="flex space-x-4">
          <router-link :to="{ name: 'VideosView' }" class="link-class"> Видео </router-link>
          <router-link :to="{ name: 'StreamingView' }" class="link-class"> Трансляция</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup></script>
