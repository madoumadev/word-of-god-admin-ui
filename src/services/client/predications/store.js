import { videosRequests } from '@/services/client/predications/requests'

export const clientVideosStore = {
  namespaced: true,

  state: {
    predicationsIds: [],
    videos: [
      {
        etag: 'ODb2-XSPZe8OK7zbbkTFpW9U4VE',
        id: 'UExFRFN5QXhMN0s2YW9KOWNQejlaYVVheU80R3JfSUxKTC4xMUQ5ODk0Q0I0MjZBQjhG',
        kind: 'youtube#playlistItem',
        snippet: {
          channelId: 'UCtpUxsEjwjHJqGtdWz63p-A',
          channelTitle: 'WordOfGod RU',
          description: 'Сергей Волков',
          playlistId: 'PLEDSyAxL7K6aoJ9cPz9ZaUayO4Gr_ILJL',
          position: 0,
          publishedAt: { value: 1695836465000, dateOnly: false, timeZoneShift: 0 },
          resourceId: { kind: 'youtube#video', videoId: 'pVKUQJlMCOo' },
          thumbnails: {
            default: {
              height: 90,
              url: 'https://i.ytimg.com/vi/pVKUQJlMCOo/default.jpg',
              width: 120
            },
            high: {
              height: 360,
              url: 'https://i.ytimg.com/vi/pVKUQJlMCOo/hqdefault.jpg',
              width: 480
            },
            maxres: {
              height: 720,
              url: 'https://i.ytimg.com/vi/pVKUQJlMCOo/maxresdefault.jpg',
              width: 1280
            },
            medium: {
              height: 180,
              url: 'https://i.ytimg.com/vi/pVKUQJlMCOo/mqdefault.jpg',
              width: 320
            },
            standard: {
              height: 480,
              url: 'https://i.ytimg.com/vi/pVKUQJlMCOo/sddefault.jpg',
              width: 640
            }
          },
          title: 'Сергей Волков "Бог запечатает только веру в Свое Слово"',
          videoOwnerChannelTitle: 'WordOfGod RU',
          videoOwnerChannelId: 'UCtpUxsEjwjHJqGtdWz63p-A'
        }
      }
    ]
  },

  getters: {
    videosList: (state) => {
      return state.videos
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
    getVideos() {
      videosRequests
        .getVideos()
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
