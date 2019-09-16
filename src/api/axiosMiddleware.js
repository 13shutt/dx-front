import axios from 'axios'
import authStore from 'stores/auth'

const { REACT_APP_API_ENDPOINT } = process.env

const makeRequest = async (method, url, params, config) => {
  const options = {
    url: `${REACT_APP_API_ENDPOINT}${url}`,
    method,
    ...config,
  }

  if (authStore.token) {
    options.headers = {
      Authorization: `Bearer ${authStore.accessToken}`,
    }
  }

  if (method === 'get') {
    options.params = params
  } else {
    options.data = params
  }

  return axios(options)
}

const errorMessage = 'Ooops.. It seems that something went wrong. Please try again later'
const request = (method, url, config) => (...params) => makeRequest(method, url, ...params, config)
  .then(({ data }) => {
    if (data.status === 'error') {
      return { success: false, error: data.message }
    }
    return { success: true, data }
  })
  .catch(error => ({
    success: false,
    error: error?.response?.data?.msg || error?.response?.data?.message || errorMessage,
  }))

export default request
