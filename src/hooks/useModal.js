import { runInAction } from 'mobx'
import { useLocalStore } from 'mobx-react-lite'

const useModal = () => {
  const store = useLocalStore(() => ({
    open: false,
    toggle() {
      runInAction(() => {
        store.open = !store.open
      })
    },
  }))

  return store
}

export default useModal
