import { createStore } from 'vuex'
import { AllRequests } from '@/api_requests/requests'
export default createStore({
  state: {
    isOpen: false,
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
      },
      {
        id: 3,
        title: 'Что такое Lorem Ipsum?',
        createdAt: '10.09.2023',
        link: 'https://link-here.com',
        preacher: 'Preacher',
        file: 'file',
        status: 'INACTIVE'
      },
      {
        id: 4,
        title: 'Что такое Lorem Ipsum?',
        createdAt: '10.09.2023',
        link: 'https://link-here.com',
        preacher: 'Preacher',
        file: 'file',
        status: 'INACTIVE'
      },
      {
        id: 3,
        title: 'Что такое Lorem Ipsum?',
        createdAt: '10.09.2023',
        link: 'https://link-here.com',
        preacher: 'Preacher',
        file: 'file',
        status: 'INACTIVE'
      },
      {
        id: 4,
        title: 'Что такое Lorem Ipsum?',
        createdAt: '10.09.2023',
        link: 'https://link-here.com',
        preacher: 'Preacher',
        file: 'file',
        status: 'INACTIVE'
      },
      {
        id: 3,
        title: 'Что такое Lorem Ipsum?',
        createdAt: '10.09.2023',
        link: 'https://link-here.com',
        preacher: 'Preacher',
        file: 'file',
        status: 'INACTIVE'
      },
      {
        id: 4,
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
    },

    isOpen: (state) => {
      return state.isOpen
    }
  },

  mutations: {
    SET_IS_OPEN: (state, status) => {
      state.isOpen = status
    }
  },

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
