<script setup></script>

<template>
  <div class="flex flex-col h-screen overflow-hidden relative bg-gray-100">
    <router-view name="header" />
    <main class="h-full overflow-y-auto">
      <div class="max-w-screen-3xl mx-auto flex relative h-full overflow-hidden">
        <router-view name="asideNav" />
        <div class="overflow-y-auto flex-1">
          <router-view class="" />
        </div>
      </div>
    </main>
  </div>
</template>
