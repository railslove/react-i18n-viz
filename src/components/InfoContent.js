import React from 'react'
import PropTypes from 'prop-types'

export default class InfoContent extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ fontWeight: 'bold', color: '#EA80FC' }}>
          {this.props.id}
        </div>
        {this.props.description && (
          <p style={{ margin: '6px 0 0 0' }}>{this.props.description}</p>
        )}
      </React.Fragment>
    )
  }
}
