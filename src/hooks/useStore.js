import React from 'react'
import { store } from '../stores'

const storeContext = React.createContext(store)

export default function useStore() {
  return React.useContext(storeContext)
}
