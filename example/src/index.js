import React from 'react'
import ReactDOM from 'react-dom'
import { configureIntlViz } from 'react-intl-viz'
import App from './App'

configureIntlViz({
  useVizComponents: process.env.REACT_APP_SHOW_INTL_VIZ
})

ReactDOM.render(<App />, document.getElementById('root'))
