import request from './axiosMiddleware'

// Usage
// const result = await api.profile.retrieve({username: 'dexrfy' })

const profile = {
  retrieve: request('get', '/profile/retrieve'),
  update: request('post', '/profile/update'),
}

const events = {
  events: request('get', '/api/events/'),
}

const token = {
  convertToken: request('post', '/auth/convert-token/')
}

export default {
  profile,
  events,
  token,
}
