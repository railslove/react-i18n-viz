import React from 'react'
import { injectIntl } from 'react-intl'
import IntlTip from './components/IntlTip'

const createVizComponent = IntlComponent => {
  class IntlVizComponent extends React.Component {
    state = {
      isHovering: false,
      measure: {}
    }

    setHovering = isHovering => {
      this.setState({ isHovering })
    }

    handleRef = ref => {
      this.outerRef = ref
    }

    handleMouseEnter = () => this.setHovering(true)
    handleMouseLeave = () => this.setHovering(false)

    componentDidMount() {
      const measure = this.outerRef.getBoundingClientRect()
      this.setState({ measure })
    }

    render() {
      const { id, description } = this.props
      const { isHovering, measure } = this.state

      return (
        <span
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          ref={this.handleRef}
        >
          <IntlTip
            intlId={id}
            intlDescription={description}
            isVisible={isHovering}
            measure={measure}
          >
            <IntlComponent {...this.props} />
          </IntlTip>
        </span>
      )
    }
  }

  return injectIntl(IntlVizComponent)
}

export default createVizComponent
