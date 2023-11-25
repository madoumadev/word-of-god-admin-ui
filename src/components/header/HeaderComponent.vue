<template>
  <header class="lg:pl-4 bg-gray-50 lg:border-0 border-b">
    <nav class="py-4">
      <div class="flex items-center justify-between max-w-screen-7xl px-4 mx-auto">
        <a href="" @click="$router.push({ name: 'HomeView' })" class="inline-flex space-x-2">
          <img class="w-8 h-8 object-cover" src="@/assets/logo.png" alt="" />
          <h1 class="uppercase hidden sm:block text-primary hover:text-blue-900 sm:text-2xl">
            Божье Слово верно
          </h1>
        </a>
        <div v-if="isAdminRoute()" class="sm:hidden">
          <button @click.prevent="store.commit('SET_IS_TOGGLE_MOBILE_MENU', !isToggleMobileMenu)">
            <Bars3BottomRightIcon v-if="!isToggleMobileMenu" class="w-8 h-8" />
            <XMarkIcon v-else class="w-8 h-8" />
          </button>
        </div>

        <div v-if="isAdminRoute()" class="hidden lg:inline-flex items-center space-x-4">
          <router-link :to="{ name: 'ProfileView' }" class="">
            <span>Администратор</span>
          </router-link>
          <button type="button">
            <PowerIcon class="w-5 h-5" />
          </button>
        </div>

        <div v-else class="inline-flex lg:space-x-4">
          <router-link
            :to="{ name: 'PredicationsView', params: { ...route.params } }"
            class="text-gray-500 px-4 py-1.5 rounded-md"
            active-class="text-primary bg-white font-bold"
          >
            <span>Видео</span>
          </router-link>
          <router-link
            :to="{ name: 'StreamingClientDirection' }"
            class="text-gray-500 px-4 py-1.5 rounded-md"
            active-class="text-primary bg-white font-bold"
          >
            <span>Трансляция</span>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { Bars3BottomRightIcon, XMarkIcon, PowerIcon } from '@heroicons/vue/24/outline'
import { useStore } from 'vuex'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const store = useStore()
const clientRoutes = [
  'HomeView',
  'StreamingClient',
  'PredicationsView',
  'VideoStreamingClient',
  'StreamingClientDirection',
  'AudioStreamingClient'
]

function isAdminRoute() {
  return !clientRoutes.includes(route.name)
}

const isToggleMobileMenu = computed(() => store.getters.isToggleMobileMenu)
</script>
