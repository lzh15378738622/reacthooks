import axios from 'axios'

const endPoints = {
  test: 'https://60b2643d62ab150017ae21de.mockapi.io/',
  prod: 'https://prod.myapi.io/',
  staging: 'https://staging.myapi.io/'
}

const request = axios.create({
  baseURL: endPoints.test,
  timeout: 30000,
  headers: { Authorization: 'Bear mytoken' }
})

request.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    if (error.response.status === 403) {
      // do something to show login UI
    }
    return Promise.reject(error)
  }
)

export default request
