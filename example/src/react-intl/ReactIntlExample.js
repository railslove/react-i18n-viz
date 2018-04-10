import React from 'react'
import { IntlProvider, addLocaleData } from 'react-intl'
import enLocaleData from 'react-intl/locale-data/en'
import deLocaleData from 'react-intl/locale-data/de'
import esLocaleData from 'react-intl/locale-data/es'
import { FormattedMessage } from 'react-i18n-viz/lib/react-intl'
import translations from './translations.json'

addLocaleData(enLocaleData)
addLocaleData(deLocaleData)
addLocaleData(esLocaleData)

export default class ReactIntlExample extends React.PureComponent {
  render() {
    const { locale } = this.props

    return (
      <IntlProvider locale={locale} messages={translations[locale]}>
        <div>
          <h1>Example with react-intl</h1>
          <p>
            <FormattedMessage
              id="app.greeting"
              description="A friendly greeting."
              values={{ name: 'John' }}
            />
          </p>
        </div>
      </IntlProvider>
    )
  }
}
