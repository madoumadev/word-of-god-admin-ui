import { API } from '../../../http/api'

export const AdminStreamRequests = {
  putLiveId(liveId) {
    return API.makePutRequest(`/live/${liveId}`)
  }
}
