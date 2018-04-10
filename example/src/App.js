import React from 'react'
import ReactIntlExample from './react-intl/ReactIntlExample'
import ReactI18nextExample from './react-i18next/ReactI18nextExample'

class App extends React.Component {
  state = {
    locale: 'en'
  }

  setLocale = locale => () => {
    this.setState({ locale })
  }

  render() {
    return (
      <div>
        <div>
          <strong>Switch locales:</strong>
          <button onClick={this.setLocale('en')}>en</button>
          <button onClick={this.setLocale('de')}>de</button>
          <button onClick={this.setLocale('es')}>es</button>
        </div>
        <ReactIntlExample locale={this.state.locale} />
        <ReactI18nextExample locale={this.state.locale} />
      </div>
    )
  }
}

export default App
