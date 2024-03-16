import { testimonyRequests } from './requests'
import router from '../../../routes'

export const clientTestimonyStore = {
  namespaced: true,

  state: {
    currentTestimonyId: null,
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
    currenttestimonyId: (state) => {
      return state.currenttestimonyId
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
      state.currenttestimonyId = id
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

    getVideos({ commit }, testimonyId) {
      commit('SET_LOADING', true)

      const handleCurrenttestimonyId = (testimonyId) => {
        router
          .push({
            name: 'TestimonyMainView',
            params: { testimonyId: testimonyId }
          })
          .then()
        commit('SET_CURRENT_VIDEO_ID', testimonyId)
      }

      testimonyRequests
        .getVideos()
        .then((response) => {
          commit('SET_LOADING', false)
          if (response.status === 200) {
            commit('SET_VIDEOS', response.data.items)

            if (!testimonyId) {
              handleCurrenttestimonyId(response.data.items[0]?.snippet.resourceId.testimonyId)
            } else {
              handleCurrenttestimonyId(testimonyId)
            }
          }
        })
        .catch((error) => {
          commit('SET_LOADING', false)
          console.error(error)
        })
    },
    getVideosInAdmin({ commit }) {
      commit('SET_LOADING', true)
      testimonyRequests
        .getVideos()
        .then((response) => {
          commit('SET_LOADING', false)
          if (response.status === 200) {
            commit('SET_VIDEOS', response.data.items)
            console.log(response.data.items)
          }
        })
        .catch((error) => {
          commit('SET_LOADING', false)
          console.error(error)
        })
    }
  }
}
