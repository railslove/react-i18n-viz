if (process.env.REACT_APP_SHOW_I18N_VIZ === 'true') {
  module.exports.withI18nViz = require('./withI18nViz').default
} else {
  module.exports.withI18nViz = mapVizProps => I18nComponent => I18nComponent
}
