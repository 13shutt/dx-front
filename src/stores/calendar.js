/* eslint-disable camelcase */
import { observable, action } from 'mobx'
import { api } from 'api'

class CalendarStore {
  @observable error = null

  @observable loading = false

  @action
  setLoading = (loading = true) => {
    if (loading) this.setError(null)
    this.loading = loading
  }

  @action
  setError = (error) => {
    this.error = error
  }

  @observable events = null
  
  @action setEvents = (data) => {
    this.events = data
  }

  

  get = async () => {
    this.setLoading(true)
  
    const eventsReponse = await api.events.events()
    if(eventsReponse.success) {
      const formattedEvents = eventsReponse.data.map(e=>({
        ...e,
        title: e.summary
      }))
      this.setEvents(formattedEvents)
    }
    
    this.setLoading(false)
  }
}

export default new CalendarStore()
