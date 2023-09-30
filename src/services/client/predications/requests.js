import { API } from '@/http/api'

export const videosRequests = {
  // For testing only
  getVideos() {
    return API.makeGetRequest(`videos`)
  }
}
