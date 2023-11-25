import { AllRequests } from './requests'

export const predicationsStore = {
  namespaced: true,

  state: {
    predicationsIds: [],
    videosList: [],
    isLoading: false,
    live: {}
  },

  getters: {
    isLoading: (state) => {
      return state.isLoading
    },
    videosList: (state) => {
      return state.videosList
    },

    predicationsIds: (state) => {
      return state.predicationsIds
    },

    liveStream: (state) => {
      return state.live
    }
  },

  mutations: {
    PUSH_PREDICATION_ID: (state, id) => {
      state.predicationsIds.push(id)
    },

    SET_PREDICATION_IDS_SELECTION: (state) => {
      state.predicationsIds = []
    },

    SET_LIVE_STREAM: (state, live) => {
      state.live = live
    },

    SET_LOADING: (state, value) => {
      state.live = value
    }
  },

  actions: {
    getVideoLive({ commit }) {
      commit('SET_LOADING', true)
      AllRequests.getLiveStream()
        .then((live) => {
          commit('SET_LOADING', false)
          commit('SET_LIVE_STREAM', live.data.items[0])
        })
        .catch(() => {
          commit('SET_LOADING', false)
        })
    }
  }
}
