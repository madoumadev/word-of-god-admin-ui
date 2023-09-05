import axios from 'axios'

const Http = axios.create({
  baseURL: import.meta.env.VITE_APP_URL,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
})

export default Http
