import React from 'react'
import I18nVizWrapper from './components/I18nVizWrapper'

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

const withI18nViz = mapVizProps => I18nComponent => {
  return class extends React.Component {
    static displayName = `WithI18nViz(${getDisplayName(I18nComponent)})`

    render() {
      const vizProps = mapVizProps(this.props)

      return (
        <I18nVizWrapper {...vizProps}>
          <I18nComponent {...this.props} />
        </I18nVizWrapper>
      )
    }
  }
}

export default withI18nViz
