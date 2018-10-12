import React from 'react'
import ReactDOM from 'react-dom'
import 'themes/styles/bases/reset'
import 'themes/styles/bases/scaffolding'
import 'themes/styles/layouts/global'
import 'themes/styles/layouts/page'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
