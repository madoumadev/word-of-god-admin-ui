import { createStore } from 'vuex'
import { predicationsStore } from '@/services/predications/store'

export default createStore({
  state: {
    isOpen: false
  },
  getters: {
    isOpen: (state) => {
      return state.isOpen
    }
  },
  mutations: {
    SET_IS_OPEN: (state, status) => {
      state.isOpen = status
    }
  },

  actions: {},
  modules: {
    predicationsStore
  }
})
