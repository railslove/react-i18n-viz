import * as ReactI18next from 'react-i18next'

export const Trans =
  process.env.REACT_APP_SHOW_I18N_VIZ === 'true'
    ? require('./').withI18nViz(props => ({
        id: props.i18nKey,
        description: props.description
      }))(ReactI18next.Trans)
    : ReactI18next.Trans
