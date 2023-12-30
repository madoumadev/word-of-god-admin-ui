<template>
  <div class="relative w-full overflow-hidden h-screen">
    <div class="relative overflow-hidden h-full flex items-center justify-center">
      <div>
        <video
          class="absolute w-full blur-sm object-cover h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          autoplay="autoplay"
          id="coverVideo"
          loop="loop"
          muted="muted"
          playsinline="playsinline"
        >
          <source :src="videoSource" type="video/mp4" />
        </video>
      </div>
      <div class="z-10 bg-black bg-opacity-20 w-full h-full flex justify-center items-center">
        <div class="lg:max-w-screen-md max-w-screen-sm mx-auto px-10 sm:px-0">
          <figure class="my-10 text-center">
            <div class="flex flex-col items-center justify-center">
              <span class="w-16 lg:w-24"
                ><img
                  src="https://wordofgod.ru/design/wog/img/o.png"
                  class="w-full h-full object-cover"
                  alt="word of God"
              /></span>
              <h1 class="text-white logo">Божье Слово Верно</h1>
            </div>

            <div class="grid lg:grid-cols-3 grid-cols-2 gap-4 pt-9">
              <router-link
                :class="[index === menus.length - 1 ? 'lg:col-span-1 col-span-2' : '']"
                class="p-4 border-l-2 hover:bg-white backdrop-blur-xl hover:border-b-primary shadow-md rounded-md bg-black group bg-opacity-30 hover:bg-opacity-20 transition-all duration-200"
                v-for="(menu, index) in menus"
                :key="index"
                :to="{ name: menu.link }"
              >
                <span class="uppercase text-white w-full group-hover:font-bold">
                  {{ menu.title }}
                </span>
              </router-link>
            </div>
            <svg
              class="w-6 h-6 lg:w-10 lg:h-10 mx-auto mb-3 mt-6 lg:mt-10 text-white text-opacity-40"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14"
            >
              <path
                d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"
              />
            </svg>
            <blockquote>
              <p class="text-xs lg:text-lg italic text-white bg-black bg-opacity-10 shadow-md">
                {{ news.isActive ? news.content : staticInfo.content }}
              </p>
            </blockquote>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoSource: `${import.meta.env.BASE_URL}cover.mp4`,
      staticInfo: {
        id: 1,
        content:
          'Когда я думаю об Африке, Индии и о всём мире, миллионы язычников кричат и вопиют о\n' +
          '                милости, и кто пойдёт? Не брошюры им раздавать, но принести им Иисуса Христа. Кто-то\n' +
          '                в Его Присутствии, как Моисей, который мог бы отправиться туда и показать им\n' +
          '                истинное избавление. Не заставлять их присоединяться к церкви или пожимать руку и\n' +
          '                иметь вероучение, но донести их душе избавление; какой-нибудь хороший благочестивый\n' +
          '                человек.'
      },
      news: {
        id: 1,
        content:
          'С 4 по 6 января 2024г. в скинии планируется проведение молодежных служений.\n' +
          'Начало служений в 12:00, обед, затем общение.\n' +
          'Желающие посетить служения и имеющие необходимость в размещении, могут отправить запрос на info@wordofgod.ru',
        isActive: true
      },
      menus: [
        {
          title: 'Главная',
          link: 'PredicationsView'
        },
        {
          title: 'Архив',
          link: 'PredicationsView'
        },
        {
          title: 'Трансляция',
          link: 'StreamingClientDirection'
        },
        {
          title: 'Дневник',
          link: 'StreamingClientDirection'
        },
        {
          title: 'Свидетельство',
          link: 'StreamingClientDirection'
        },
        {
          title: 'Поклонения',
          link: 'PredicationsView'
        },
        {
          title: 'Фото',
          link: 'StreamingClientDirection'
        },
        {
          title: 'О нас',
          link: 'StreamingClientDirection'
        },
        {
          title: 'Контакты',
          link: 'StreamingClientDirection'
        }
      ]
    }
  }
}
</script>
