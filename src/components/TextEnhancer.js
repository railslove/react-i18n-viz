import React from 'react'
import PropTypes from 'prop-types'
import { Portal } from 'react-portal'

import Balloon from './Balloon'
import InfoContent from './InfoContent'

export default class TextEnhancer extends React.Component {
  static propTypes = {
    isVisible: PropTypes.bool,
    children: PropTypes.node,
    description: PropTypes.string,
    id: PropTypes.string.isRequired,
    measure: PropTypes.object.isRequired
  }

  getPosition = measure => {
    const bounds = measure.x ? measure : { x: 0, y: 0, height: 0 }

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
              <InfoContent
                id={this.props.id}
                description={this.props.description}
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
