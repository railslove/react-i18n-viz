import * as ReactIntl from 'react-intl'

export const FormattedMessage =
  process.env.REACT_APP_SHOW_I18N_VIZ === 'true'
    ? require('./').withI18nViz(props => ({
        id: props.id,
        description: props.description
      }))(ReactIntl.injectIntl(ReactIntl.FormattedMessage))
    : ReactIntl.FormattedMessage

export const FormattedHTMLMessage =
  process.env.REACT_APP_SHOW_I18N_VIZ === 'true'
    ? require('./').withI18nViz(props => ({
        id: props.id,
        description: props.description
      }))(ReactIntl.injectIntl(ReactIntl.FormattedHTMLMessage))
    : ReactIntl.FormattedHTMLMessage
