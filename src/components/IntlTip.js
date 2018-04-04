import React from 'react'
import PropTypes from 'prop-types'
import { Portal } from 'react-portal'

import Balloon from './Balloon'
import IntlInfo from './IntlInfo'

export default class IntlTip extends React.PureComponent {
  static propTypes = {
    isVisible: PropTypes.bool,
    children: PropTypes.node,
    intlDescription: PropTypes.string,
    intlId: PropTypes.string.isRequired,
    measure: PropTypes.object.isRequired
  }

  getPosition = measure => {
    const defaults = { x: 0, y: 0, height: 0 }
    const bounds = { ...defaults, ...measure }
    return {
      top: bounds.y + bounds.height,
      left: bounds.x
    }
  }

  render() {
    const { isVisible, measure } = this.props
    const position = this.getPosition(measure)

    return (
      <React.Fragment>
        {isVisible && (
          <Portal>
            <Balloon style={position}>
              <IntlInfo
                id={this.props.intlId}
                description={this.props.intlDescription}
              />
            </Balloon>
          </Portal>
        )}

        <span style={{ backgroundColor: isVisible && '#FFFF8D' }}>
          {this.props.children}
        </span>
      </React.Fragment>
    )
  }
}
