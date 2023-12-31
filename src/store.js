import { createStore } from 'vuex'
import { clientVideosStore } from './services/client/predications/store'
import { predicationsStore } from './services/client/streaming/store'
import { adminStreamStore } from './services/admin/streaming/store'

export default createStore({
  state: {
    isOpen: false,
    isToggleMobileMenu: false
  },
  getters: {
    isOpen: (state) => {
      return state.isOpen
    },
    isToggleMobileMenu: (state) => {
      return state.isToggleMobileMenu
    }
  },
  mutations: {
    SET_IS_OPEN: (state, status) => {
      state.isOpen = status
    },
    SET_IS_TOGGLE_MOBILE_MENU: (state, status) => {
      state.isToggleMobileMenu = status
    }
  },

  actions: {},
  modules: {
    clientVideosStore,
    predicationsStore,
    adminStreamStore
  }
})
