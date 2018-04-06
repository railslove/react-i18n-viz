import React from 'react'
import PropTypes from 'prop-types'
import TextEnhancer from './TextEnhancer'

export default class I18nVizWrapper extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    description: PropTypes.string
  }

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
        <TextEnhancer
          id={id}
          description={description}
          isVisible={isHovering}
          measure={measure}
        >
          {this.props.children}
        </TextEnhancer>
      </span>
    )
  }
}
