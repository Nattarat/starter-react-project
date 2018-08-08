import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  SimpleWrapper
} from './styled'

/**
 * Simple
 * - simple component description
 */

export class Simple extends React.PureComponent {
  render () {
    const {
      className,
      heading,
      description,
      footer,
      specialMessage,
      children
    } = this.props

    return (
      <SimpleWrapper className={
        ClassNames(
          'simple',
          className
        )
      }>
        <div className='simple-header'>
          <h1 className='simple-text-heading'>
            {heading}
          </h1>
        </div>
        <div className='simple-body'>
          <p className='simple-text-description'>
            {description}
          </p>
        </div>
        <div className='simple-footer'>
          {footer}
        </div>
        <div className='simple-special-message'>
          {specialMessage}
        </div>
        {children}
      </SimpleWrapper>
    )
  }
}

Simple.propTypes = { // TYPE > node, string, func, bool
  /**
   * State/Modifier classname for change default UI
  */
  className: PropTypes.oneOf([
    'is-error',
    'is-success',
    'is-special-message'
  ]),
  /** Heading */
  heading: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]),
  /** Description */
  description: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]),
  /** Footer */
  footer: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]),
  /** Special message (show when className='is-special-message') */
  specialMessage: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]),
  /** Additional element at bottom of Footer */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ])
}

Simple.defaultProps = {
  // PROPS_NAME: ''
}
