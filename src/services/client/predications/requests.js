import { API } from '@/http/api'

export const videosRequests = {
  getVideos() {
    return API.makeGetRequest(`videos`)
  },

  downloadVideo(videoId) {
    return API.makeGetRequest(`videos/download/${videoId}`)
  }
}
