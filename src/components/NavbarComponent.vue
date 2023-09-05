<template>
  <header class="w-full">
    <nav class="bg-white border-gray-200 py-4 shadow">
      <div class="flex items-center justify-between max-w-screen-xl px-4 mx-auto">
        <router-link to="/" class="inline-flex space-x-2">
          <img src="@/assets/logo.png" class="w-6 h-6 object-cover" alt="logo Божье Слово верно" />
          <h1 class="font-bold hover:text-gray-900">Божье Слово верно</h1>
        </router-link>
        <div>
          <router-link :to="{ name: 'VideosView' }" class="capitalize"> Видео </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup></script>
