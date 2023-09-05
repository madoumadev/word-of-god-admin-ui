import { createStore } from 'vuex'
import { AllRequests } from '@/api_requests/requests'
export default createStore({
  state: {},

  getters: {},

  mutations: {},

  actions: {
    // For testing only

    getComments() {
      AllRequests.getComments()
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
})
