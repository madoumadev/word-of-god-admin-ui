import { videosRequests } from './requests'
import router from '../../../routes'

export const clientVideosStore = {
  namespaced: true,

  state: {
    currentVideoId: null,
    loading: false,
    searchQuery: '',
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
    },
    filteredVideos: (state) => {
      return state.videos.filter((video) =>
        video?.snippet?.title
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(state.searchQuery.toLowerCase().replace(/\s+/g, ''))
      )
    }
  },

  mutations: {
    SET_SEARCH_QUERY: (state, query) => {
      state.searchQuery = query
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
    setSearchQuery({ commit }, query) {
      commit('SET_SEARCH_QUERY', query)
    },

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
