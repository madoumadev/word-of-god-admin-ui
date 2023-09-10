<script setup>
import { computed } from 'vue'
import { Dialog, DialogOverlay, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { useStore } from 'vuex'

const store = useStore()
const isOpen = computed(() => store.getters['isOpen'])

const onClose = () => store.commit('SET_IS_OPEN', !isOpen.value)
</script>

<template>
  <div>
    <TransitionRoot :show="isOpen" as="template" class="z-50">
      <Dialog as="div" class="fixed z-50 inset-0 overflow-y-auto" @close="onClose">
        <div
          class="flex items-end justify-center min-h-screen pt-4 pb-20 text-center sm:block sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />
          </TransitionChild>
          <span aria-hidden="true" class="hidden sm:inline-block sm:align-middle sm:h-screen"
            >&#8203;</span
          >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              class="inline-block bg-white rounded-xl mx-4 sm:mx-0 w-full max-w-md h-auto overflow-hidden shadow-xl transform transition-all sm:align-middle"
            >
              <div class="p-8 text-left">
                <slot />
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
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
