import { videosRequests } from './requests'
import router from '../../../routes'

export const clientVideosStore = {
  namespaced: true,

  state: {
    currentVideoId: null,
    loading: false,
    videos: []
  },

  getters: {
    videosList: (state) => {
      return state.videos
    },

    loading: (state) => {
      return state.loading
    },
    currentVideoId: (state) => {
      return state.currentVideoId
    }
  },

  mutations: {
    PUSH_PREDICATION_ID: (state, id) => {
      state.predicationsIds.push(id)
    },

    SET_CURRENT_VIDEO_ID: (state, id) => {
      state.currentVideoId = id
    },

    SET_LOADING: (state, loading) => {
      state.loading = loading
    },

    SET_VIDEOS: (state, videos) => {
      state.videos = videos
    }
  },

  actions: {
    getVideos({ commit }, videoId) {
      commit('SET_LOADING', true)

      const handleCurrentVideoId = (videoId) => {
        router
          .push({
            name: 'PredicationsView',
            params: { videoId: videoId }
          })
          .then()
        commit('SET_CURRENT_VIDEO_ID', videoId)
      }

      videosRequests
        .getVideos()
        .then((response) => {
          commit('SET_LOADING', false)
          if (response.status === 200) {
            commit('SET_VIDEOS', response.data.items)

            if (!videoId) {
              handleCurrentVideoId(response.data.items[0]?.snippet.resourceId.videoId)
            } else {
              handleCurrentVideoId(videoId)
            }
          }
        })
        .catch((error) => {
          commit('SET_LOADING', false)
          console.error(error)
        })
    }
  }
}
