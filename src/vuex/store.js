import { createStore } from 'vuex'
import { AllRequests } from '@/api_requests/requests'
export default createStore({
  state: {
    videosList: [
      {
        id: 1,
        title:
          'Почему он используется? Почему он используется? Почему он используется? Почему он используется? Почему он используется? Почему он используется?',
        createdAt: '10.09.2023',
        link: 'https://link-here.com',
        preacher: 'Preacher',
        file: 'file',
        status: 'ACTIVE'
      },
      {
        id: 2,
        title: 'Что такое Lorem Ipsum?',
        createdAt: '10.09.2023',
        link: 'https://link-here.com',
        preacher: 'Preacher',
        file: 'file',
        status: 'INACTIVE'
      }
    ]
  },

  getters: {
    videosList: (state) => {
      return state.videosList
    }
  },

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
