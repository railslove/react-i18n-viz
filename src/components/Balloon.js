import React from 'react'
import PropTypes from 'prop-types'

export default class Balloon extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
  }

  static defaultProps = {
    style: {}
  }

  render() {
    return (
      <div
        style={{
          position: 'absolute',
          padding: '8px 10px 6px',
          backgroundColor: '#2d3038',
          color: '#FAFAFA',
          borderRadius: 2,
          fontFamily: '"Lucida Console", Monaco, monospace',
          fontSize: 11,
          maxWidth: 300,
          marginTop: 10,
          textRendering: 'optimizeLegibility',
          ...this.props.style
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -8,
            left: 12,
            width: 0,
            height: 0,
            borderBottom: '8px solid #2d3038',
            borderLeft: '8px solid transparent',
            borderRight: '8px solid transparent'
          }}
        />
        {this.props.children}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: -14,
            height: 14
          }}
        />
      </div>
    )
  }
}
