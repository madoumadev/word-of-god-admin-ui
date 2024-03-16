import { API } from '@/http/api'

export const testimonyRequests = {
  getVideos() {
    return API.makeGetRequest(`videos`)
  },

  downloadVideo(videoId) {
    return API.makeGetRequest(`videos/download/${videoId}`)
  }
}
