import React from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'
import { FormattedMessage } from 'react-intl-viz'
import translations from './translations.json'

addLocaleData(enLocaleData)

class App extends React.Component {
  render() {
    return (
      <IntlProvider locale="en" messages={translations.en}>
        <div className="App">
          <FormattedMessage
            id="app.greeting"
            description="A friendly greeting."
            values={{ name: 'John' }}
          />
        </div>
      </IntlProvider>
    )
  }
}

export default App
