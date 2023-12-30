<template>
  <div class="text-center flex justify-center items-center w-full">
    <div class="w-full mx-auto lg:mt-8 mt-2">
      <div class="relative z-10">
        <div
          class="bg-white border-slate-100 transition-all duration-500 border-b lg:rounded-xl p-4 pb-6 sm:p-10 sm:pb-8 lg:p-6 xl:p-10 xl:pb-8 space-y-6 sm:space-y-8 lg:space-y-6 xl:space-y-8"
        >
          <div class="flex items-center space-x-4">
            <button
              type="button"
              @click="handlePlayPause(playing)"
              class="bg-white text-primary transition-all duration-500 flex-none -my-2 mx-auto w-20 h-20 rounded-full ring-1 ring-slate-900/5 shadow-md flex items-center justify-center"
              aria-label="Pause"
            >
              <span
                v-if="!playing"
                class="cursor-pointer"
                id="play"
                :title="playing ? 'Pause' : 'Play'"
              >
                <HeroIcon
                  class="cursor-pointer"
                  icon-name="PlayIcon"
                  :icon-size="6"
                  icon-type="outline"
                />
              </span>
              <span v-else id="stop" title="Stop">
                <HeroIcon
                  :class="['cursor-pointer']"
                  icon-name="PauseIcon"
                  :icon-size="5"
                  icon-type="outline"
                />
              </span>
            </button>
            <div class="min-w-0 flex-auto space-y-1 font-semibold">
              <div class="px-4 flex flex-col">
                <div class="inline-flex space-x-2">
                  <span
                    class="block text-xs bg-red-600 border-red-300 flex-shrink-0 rounded-full h-6 w-6 border-2 animate-pulse"
                  >
                  </span>
                  <div class="relative">
                    <h1 class="line-clamp-1 lg:text-lg text-xs">Молодежный лагерь в Раменском</h1>
                    <div v-if="playing" class="absolute left-0 right-0 top-8 px-2">
                      <div class="flex justify-center items-center gap-1">
                        <div class="loader"></div>
                        <div class="loader"></div>
                        <div class="loader"></div>
                        <div class="loader"></div>
                        <div class="loader"></div>
                        <div class="loader"></div>
                        <div class="loader"></div>
                        <div class="loader"></div>
                        <div class="loader"></div>
                        <div class="loader"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <audio
      :autoPlay="autoPlay"
      :loop="looping"
      ref="audio"
      :src="RADIO_URL"
      @timeupdate="update"
      @loadeddata="load"
      @pause="playing = false"
      @play="play"
      preload="auto"
      class="hidden"
    ></audio>
  </div>
</template>

<script>
const RADIO_URL = 'https://harp.stream/listen/service/radio.mp3'
import HeroIcon from '../../../../components/icons/HeroIcon.vue'

export default {
  name: 'RadioPlayer',
  components: { HeroIcon },
  props: {
    autoPlay: {
      type: Boolean,
      default: false
    },
    isRadio: {
      type: Boolean,
      default: false
    },
    displayPanel: {
      type: Boolean,
      default: () => false
    },
    song: {
      type: Object,
      default: null
    },
    loop: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      RADIO_URL,
      np_elapsed: 0,
      currentSeconds: 0,
      durationSeconds: 0,
      loaded: false,
      looping: false,
      playing: false,
      previousVolume: 35,
      showVolume: false,
      volume: 100,
      clock_interval: null
    }
  },

  created() {
    this.looping = this.loop
  },

  watch: {
    playing(value) {
      if (value) {
        return this.$refs.audio.play()
      }
      if (this.$refs.audio) this.$refs.audio.pause()
    },
    volume() {
      this.$refs.audio.volume = this.volume / 100
    }
  },
  mounted() {
    this.clock_interval = setInterval(this.iterateTimer, 1000)
  },

  computed: {
    muted() {
      return this.volume / 100 === 0
    }
  },

  methods: {
    handlePlayPause(isPlaying) {
      if (isPlaying) {
        this.pause()
      } else {
        this.play()
      }
    },

    iterateTimer() {
      let current_time = Math.floor(Date.now() / 1000)
      let np_elapsed = current_time - this.song?.playedAt
      if (np_elapsed < 0) {
        np_elapsed = 0
      } else if (np_elapsed >= this.song?.duration) {
        np_elapsed = this.song?.duration
      }
      this.np_elapsed = np_elapsed
    },

    play() {
      this.playing = true
    },

    load() {
      if (this.$refs.audio.readyState >= 2) {
        this.loaded = true
        this.durationSeconds = parseInt(this.$refs.audio.duration)
        return (this.playing = this.autoPlay)
      }
      throw new Error('Failed to load sound song.')
    },

    pause() {
      this.playing = false
      if (this.$refs.audio) {
        this.$refs.audio.pause()
      }
    },

    update() {
      if (this.$refs.audio) this.currentSeconds = parseInt(this.$refs.audio.currentTime)
    }
  }
}
</script>
