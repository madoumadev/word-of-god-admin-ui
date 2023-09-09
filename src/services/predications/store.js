import { AllRequests } from '@/services/predications/requests'

export const predicationsStore = {
  namespaced: true,

  state: {
    predicationsIds: [],
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
        id: 5,
        title: 'Что такое Lorem Ipsum?',
        createdAt: '10.09.2023',
        link: 'https://link-here.com',
        preacher: 'Preacher',
        file: 'file',
        status: 'INACTIVE'
      },
      {
        id: 6,
        title: 'Что такое Lorem Ipsum?',
        createdAt: '10.09.2023',
        link: 'https://link-here.com',
        preacher: 'Preacher',
        file: 'file',
        status: 'INACTIVE'
      },
      {
        id: 7,
        title: 'Что такое Lorem Ipsum?',
        createdAt: '10.09.2023',
        link: 'https://link-here.com',
        preacher: 'Preacher',
        file: 'file',
        status: 'INACTIVE'
      },
      {
        id: 8,
        title: 'Что такое Lorem Ipsum?',
        createdAt: '10.09.2023',
        link: 'https://link-here.com',
        preacher: 'Preacher',
        file: 'file',
        status: 'INACTIVE'
      },
      {
        id: 9,
        title: 'Что такое Lorem Ipsum?',
        createdAt: '10.09.2023',
        link: 'https://link-here.com',
        preacher: 'Preacher',
        file: 'file',
        status: 'INACTIVE'
      },
      {
        id: 10,
        title: 'Что такое Lorem Ipsum?',
        createdAt: '10.09.2023',
        link: 'https://link-here.com',
        preacher: 'Preacher',
        file: 'file',
        status: 'INACTIVE'
      },
      {
        id: 11,
        title: 'Что такое Lorem Ipsum?',
        createdAt: '10.09.2023',
        link: 'https://link-here.com',
        preacher: 'Preacher',
        file: 'file',
        status: 'INACTIVE'
      },
      {
        id: 12,
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
}
