import { AllRequests } from './requests'

export const predicationsStore = {
  namespaced: true,

  state: {
    predicationsIds: [],
    videosList: []
  },

  getters: {
    videosList: (state) => {
      return state.videosList
    },

    predicationsIds: (state) => {
      return state.predicationsIds
    }
  },

  mutations: {
    PUSH_PREDICATION_ID: (state, id) => {
      state.predicationsIds.push(id)
    },

    SET_PREDICATION_IDS_SELECTION: (state) => {
      state.predicationsIds = []
    }
  }
}
