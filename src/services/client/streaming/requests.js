import { API } from '@/http/api'

export const AllRequests = {
  /*
   * I'll add requests here
   * */

  // For testing only
  getComments() {
    return API.makeGetRequest(`comments`)
  }
}
