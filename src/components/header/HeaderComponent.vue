<template>
  <header class="px-4">
    <nav class="py-4">
      <div class="flex items-center justify-between max-w-screen-7xl px-4 mx-auto">
        <a href="" @click="$router.push({ name: 'HomeView' })" class=" ">
          <h1 class="uppercase text-gray-500 hover:text-gray-900 sm:text-2xl">Божье Слово верно</h1>
        </a>
        <div class="sm:hidden">
          <button @click.prevent="store.commit('SET_IS_TOGGLE_MOBILE_MENU', !isToggleMobileMenu)">
            <Bars3BottomRightIcon v-if="!isToggleMobileMenu" class="w-8 h-8" />
            <XMarkIcon v-else class="w-8 h-8" />
          </button>
        </div>

        <div class="hidden sm:inline-flex items-center space-x-4">
          <router-link :to="{ name: 'ProfileView' }" class="">
            <span>Godran</span>
          </router-link>
          <button type="button">
            <PowerIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { Bars3BottomRightIcon, XMarkIcon, PowerIcon } from '@heroicons/vue/24/outline'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const isToggleMobileMenu = computed(() => store.getters.isToggleMobileMenu)
</script>
