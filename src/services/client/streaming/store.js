import { AllRequests } from './requests'

export const predicationsStore = {
  namespaced: true,

  state: {
    predicationsIds: [],
    videosList: [],
    live: {}
  },

  getters: {
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
    }
  },

  actions: {
    getVideoLive({ commit }) {
      AllRequests.getLiveStream().then((live) => {
        commit('SET_LIVE_STREAM', live.data.items[0])
      })
    }
  }
}
