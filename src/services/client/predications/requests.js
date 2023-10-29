import { API } from '@/http/api'

export const videosRequests = {
  getVideos() {
    return API.makeGetRequest(`videos`)
  }
}
