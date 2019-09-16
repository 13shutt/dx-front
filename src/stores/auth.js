import {
  observable, action, reaction, computed,
} from 'mobx'
import {api} from '../api'
import calendar from './calendar'

const saveLocalStorage = key => (value) => {
  if (value) {
    localStorage.setItem(key, value)
  } else {
    localStorage.removeItem(key)
  }
}

class AuthStore {
  @observable error = null
  
  @observable successMessage = null
  
  @observable loading = false
  
  @observable token = localStorage.getItem('token')
  
  @observable user = localStorage.getItem('user')
  
  @observable accessToken = localStorage.getItem('accessToken')
  
  @observable convertedToken = localStorage.getItem('convertedToken')
  
  @observable expires = localStorage.getItem('expires')
  
  @observable loggedIn = localStorage.getItem('loggedIn')
  
  constructor() {
    reaction(() => this.token, saveLocalStorage('token'))
    reaction(() => this.user, saveLocalStorage('user'))
    reaction(() => this.accessToken, saveLocalStorage('accessToken'))
    reaction(() => this.convertedToken, saveLocalStorage('convertedToken'))
    reaction(() => this.expires, saveLocalStorage('expires'))
    reaction(() => this.loggedIn, saveLocalStorage('loggedIn'))
  }
  
  @computed
  get authenticated() {
    const time = new Date().getTime()
    
    return this.expires > time
  }

  @action
  authCallback = (error, result) => {
    if (error) {
      this.setError(error.description)
    }
    if (result) {
      this.setSession(result)
    }
    this.loading = false
  }
  
  @action
  setLoading = (loading = true) => {
    if (loading) this.clearError()
    this.loading = loading
  }
  
  @action
  setError = (error) => {
    this.error = error
  }
  
  @action
  setSuccessMessage = (message = null) => {
    this.successMessage = message
  }
  
  @action('clear error')
  clearError = () => {
    this.error = null
  }
  
  convertToken = async (token) => {
    const result = await api.token.convertToken({
      grant_type: 'convert_token',
      client_id: 'uDajpCzNQi5WQ4BAreCcdqvIWxH6XOSdhjaBK0g2',
      client_secret: 'NZ0BQInYtxVtcXK3xzSbzaDX3J9nRmkZ1Odm7LXSJpMtC7j6bP5GDUSJanKjcFrnWvpitStWD04KitQh3NnQXU7fYfBcyDa16j8yZK8iMfSTYj1DOWvHG4j5ILmlxQqi',
      backend: 'google-oauth2',
      token: token,
    })
    
    return result
  }
  
  runSession = async (data) => {
    const { access_token } = data
    const convertedToken = await this.convertToken(access_token)
    
    if(convertedToken.success) {
      this.setSession({...convertedToken.data, expires_at:  data.expires_at, id_token: data.id_token})
      const a = calendar?.get()
      return a
    }
  }


  @action
  setSession = async (data) => {
    const { id_token, access_token, expires_at } = data
  
    this.loggedIn = true
    this.token = id_token
    this.accessToken = access_token
    this.expires = expires_at
  }
  
  @action
  setUser = async (data) => {
    this.user = JSON.stringify(data)
  }
  
  @action
  logout() {
    this.token = null
    this.accessToken = null
    this.expires = 0
    this.loggedIn = false
  }
}

export default new AuthStore()
