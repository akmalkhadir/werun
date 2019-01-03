import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import { createStore } from 'redux'
import Root from './Components/Root'
import runApp from './reducers'

import * as serviceWorker from './serviceWorker'

const store = createStore(
  runApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(<Root store={store} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
