import {
  observable, action, computed,
} from 'mobx'

class UserStore {
  @observable error = null

  @observable successMessage = null

  @observable loading = false
  
  @observable user = localStorage.getItem('user')
  
  @computed
  get userProfile() {
    return JSON.parse(this.user)
  }
  
  @action
  setUser = (user) => {
    this.user = user
  }
  
  @computed
  get authenticated() {
    const time = new Date().getTime()

    return this.expires > time
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
}

export default new UserStore ()
