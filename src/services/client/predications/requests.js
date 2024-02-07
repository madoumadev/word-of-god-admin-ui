import { API } from '@/http/api'

export const videosRequests = {
  getVideos() {
    return API.makeGetRequest(`videos/preaching`)
  },

  getTestimonies() {
    return API.makeGetRequest(`videos/testimonies`)
  },

  downloadVideo(videoId) {
    return API.makeGetRequest(`videos/download/${videoId}`)
  }
}
