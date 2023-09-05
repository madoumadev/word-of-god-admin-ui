<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isOpen = ref(true)
const router = useRouter()

const handleCheckToken = () => {
  // request

  // verification

  // close modal
  isOpen.value = !isOpen.value

  // redirect

  router.push({ name: 'VideosView' })
}
</script>

<template>
  <transition name="fade">
    <div v-if="isOpen">
      <div class="absolute bg-black opacity-20 inset-0 z-0"></div>
      <div class="w-full max-w-lg p-3 relative mx-auto my-auto bg-white">
        <form @submit.prevent="handleCheckToken">
          <div class="text-center p-3 flex-auto justify-center">
            <h2 class="text-xl font-bold py-4">
              Для подключения к сервису Тинькофф-инвестиции необходимо ввести токен
            </h2>

            <input type="text" id="token" name="token" class="tink-input" />
          </div>
          <div class="p-3 mt-2 text-center">
            <button type="submit" class="tink-primary-btn">Создать Операцию</button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
</style>
