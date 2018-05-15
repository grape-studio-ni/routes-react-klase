import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory  } from 'react-router'
import { syncHistoryWithStore, RouterStore } from 'mobx-react-router'
import './index.css'
import App from './components/app/App'
import registerServiceWorker from './registerServiceWorker'
import Menu from './components/ui/Menu'

const router = new RouterStore()
const history = syncHistoryWithStore(hashHistory, router)

ReactDOM.render(
  <Router history={history}>
    <Route path={'/'} component={App}/>
    <Route path={'/app'} component={Menu}/>
    <Route path={'/website/:url'} component={App}/>
  </Router>,
  document.getElementById('root')
)

registerServiceWorker()
