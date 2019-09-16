import { createBrowserHistory } from 'history'
import { syncHistoryWithStore, RouterStore } from 'mobx-react-router'

const routing = new RouterStore()
const browserHistory = createBrowserHistory()

const history = syncHistoryWithStore(browserHistory, routing)

export { routing, history }
