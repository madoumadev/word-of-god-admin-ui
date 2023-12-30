import { AllRequests } from './requests'
import stationToSong from '../../../utils/stationToSong'
import { RADIO_BASE_URL } from '../../../http/config'
import Http from '../../../http/axios'

export const predicationsStore = {
  namespaced: true,

  state: {
    predicationsIds: [],
    videosList: [],
    isLoading: false,
    songs: [],
    song: null,
    songCodes: [],
    currentStationId: 4,
    live: {},
    radio: null
  },

  getters: {
    radio: (state) => {
      return state.radio
    },
    isLoading: (state) => {
      return state.isLoading
    },
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
    },

    SET_LOADING: (state, value) => {
      state.live = value
    },
    GET_STATION_LIST: (state, stations) => {
      state.currentSongbook = {
        id: 400,
        name: 'Radio station',
        code: 'radio_streaming',
        isRadio: true,
        userId: 3,
        addedBy: 'SYSTEM',
        description: null,
        languageId: 13,
        isDraft: false,
        version: 'v0.0.1',
        language: {
          id: 13,
          name: 'Default',
          code: 'de'
        }
      }
      state.songs = stations
        .filter((station) => station.station.name !== 'Riga' && station.playing_next)
        .map((station) => stationToSong(station))
    },

    GET_STATION_BY_ID: (state, station) => {
      state.song = stationToSong(station)
    },
    SET_CURRENT_STATION_ID: (state, currentStationId) => {
      state.currentStationId = currentStationId
    }
  },

  actions: {
    getVideoLive({ commit }) {
      commit('SET_LOADING', true)
      AllRequests.getLiveStream()
        .then((live) => {
          commit('SET_LOADING', false)
          commit('SET_LIVE_STREAM', live.data.items[0])
        })
        .catch(() => {
          commit('SET_LOADING', false)
        })
    },
    async getRadios({ commit }, id) {
      commit('SET_LOADING', true)
      try {
        const res = await Http.get(RADIO_BASE_URL + `/${id}`)
        console.log(res.data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
