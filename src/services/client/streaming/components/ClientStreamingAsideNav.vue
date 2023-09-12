<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import AsideNavLayout from '@/components/shared/AsideNavLayout.vue'
import HeroIcon from '@/components/icons/HeroIcon.vue'

export default defineComponent({
  name: 'ClientStreamingAsideNav',
  components: { HeroIcon, AsideNavLayout },

  computed: {
    ...mapGetters({
      videosList: 'predicationsStore/videosList'
    })
  }
})
</script>

<template>
  <AsideNavLayout>
    <div class="mt-4 flex flex-col p-6 overflow-hidden space-y-10 divide-y h-full">
      <div class="flex flex-col">
        <p class="capitalize text-gray-400 text-sm mb-4">БЛИЖАЙШАЯ ТРАНСЛЯЦИЯ</p>
        <div class="inline-flex items-center mb-2 space-x-2">
          <HeroIcon icon-type="outline" icon-name="CalendarIcon" class="w-4 h-5 text-gray-400" />
          <p class="text-sm text-black capitalize font-bold">13 СЕНТЯБРЯ, СРЕДА</p>
        </div>
        <div class="inline-flex items-center space-x-2">
          <HeroIcon icon-type="outline" icon-name="ClockIcon" class="w-4 h-5 text-gray-400" />
          <p class="text-sm font-bold capitalize text-black">В 19:00</p>
        </div>
      </div>
      <div class="flex flex-col space-y-2 pt-4">
        <p class="uppercase text-gray-400 text-sm mb-4">Адрес</p>
        <div class="">
          <p class="text-sm text-black capitalize font-bold">
            ЦЕРКОВЬ ЕВАНГЕЛЬСКИХ ХРИСТИАН "БЛАГАЯ ВЕСТЬ", Г. МОСКВА
          </p>
        </div>
      </div>
      <div class="flex flex-col space-y-2 pt-4">
        <p class="uppercase text-gray-400 text-sm mb-4">СЛУЖЕНИЯ</p>
        <ul class="list-disc pl-4">
          <li class="text-sm text-black capitalize font-bold mb-2">ВОСКРЕСЕНЬЕ - 12:00,</li>
          <li class="text-sm text-black capitalize font-bold">СРЕДА - 19:00</li>
        </ul>
      </div>

      <div class="flex flex-col space-y-2 pt-4">
        <p class="uppercase text-gray-400 text-sm mb-4">КОНТАКТЫ</p>
        <div class="">
          <p class="text-sm text-black font-bold">info@wordofgod.ru</p>
        </div>
      </div>
    </div>
  </AsideNavLayout>
</template>
