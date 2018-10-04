import React from 'react'
import ReactDOM from 'react-dom'
import 'themes/styles/bases/reset'
import 'themes/styles/bases/scaffolding'
import 'themes/styles/vendors/bootstrap'
import 'themes/styles/vendors/react-slick'
import 'themes/styles/layouts/home'
import 'themes/styles/layouts/main'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
