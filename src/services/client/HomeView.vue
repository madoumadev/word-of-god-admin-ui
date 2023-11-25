<template>
  <div class="relative w-full overflow-hidden">
    <div class="relative overflow-hidden h-screen flex items-center justify-center">
      <div>
        <video
          class="absolute w-full blur-sm object-cover h-screen -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
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
        <div class="max-w-screen-md mx-auto px-10 sm:px-0">
          <figure class="my-10 text-center">
            <a href="" @click="$router.push({ name: 'HomeView' })" class="">
              <h1 class="uppercase text-4xl text-white lg:text-8xl">Божье Слово</h1>
            </a>
            <svg
              class="w-10 h-10 mx-auto mb-3 mt-10 text-white"
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
              <p class="text-xs lg:text-lg italic text-white">
                "Когда я думаю об Африке, Индии и о всём мире, миллионы язычников кричат и вопиют о
                милости, и кто пойдёт? Не брошюры им раздавать, но принести им Иисуса Христа. Кто-то
                в Его Присутствии, как Моисей, который мог бы отправиться туда и показать им
                истинное избавление. Не заставлять их присоединяться к церкви или пожимать руку и
                иметь вероучение, но донести их душе избавление; какой-нибудь хороший благочестивый
                человек."
              </p>
            </blockquote>
          </figure>

          <div class="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-10">
            <div class="bg-white p-6 rounded-3xl">
              <router-link
                :to="{ name: 'PredicationsView' }"
                type="button"
                class="wfg-btn-primary uppercase w-full"
              >
                Видео
              </router-link>
            </div>
            <div class="bg-white p-6 rounded-3xl">
              <router-link
                :to="{ name: 'StreamingClientDirection' }"
                type="button"
                class="wfg-btn-primary uppercase w-full"
                >Трансляция</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoSource: `${import.meta.env.BASE_URL}cover.mp4`
    };
  },
  mounted() {
    this.$refs.video.play(); // Ensure video starts playing when component mounts
  }
};
</script>