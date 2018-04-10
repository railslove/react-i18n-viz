import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { Trans } from 'react-i18n-viz/lib/react-i18next'
import i18n from './i18n'

export default class ReactI18nextExample extends React.PureComponent {
  componentWillReceiveProps(nextProps) {
    i18n.changeLanguage(nextProps.locale)
  }

  render() {
    const name = "John"

    return (
      <I18nextProvider i18n={i18n}>
        <div>
          <h1>Example with react-i18next</h1>
          <p>
            <Trans i18nKey="app_greeting" description="A friendly greeting.">
              Hello {{name}}, <div>how are you today?</div>
            </Trans>
          </p>
        </div>
      </I18nextProvider>
    )
  }
}
