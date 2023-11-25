import { AdminStreamRequests } from './requests'
import store from '../../../store'

export const adminStreamStore = {
  namespaced: true,

  state: {
    loading: false
  },

  getters: {
    isLoading: (state) => {
      return state.loading
    }
  },

  mutations: {
    SET_LOADING: (state, value) => {
      state.loading = value
    }
  },

  actions: {
    putLiveId({ commit }, liveId) {
      commit('SET_LOADING', true)
      AdminStreamRequests.putLiveId(liveId)
        .then(() => {
          store.dispatch('predicationsStore/getVideoLive').then(() => {
            commit('SET_LOADING', false)
          })
        })
        .catch(() => {
          commit('SET_LOADING', false)
        })
    }
  }
}
