import Http from '@/api_requests/axios'

export const API = {
  makeGetRequest,
  makePostRequest,
  makePutRequest
}

function makeGetRequest(endpoint) {
  return new Promise((resolve, reject) => {
    Http.get(`${endpoint}`)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => reject(error))
  })
}

function makePostRequest(endpoint, payload) {
  return new Promise((resolve, reject) => {
    Http.post(`${endpoint}`, payload)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => reject(error))
  })
}

function makePutRequest(endpoint, payload) {
  return new Promise((resolve, reject) => {
    Http.put(`${endpoint}`, payload)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => reject(error))
  })
}
