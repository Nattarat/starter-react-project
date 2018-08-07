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
   * State/Modifier classname for change default UI:
   *
   * is-error, is-success, is-special
  */
  className: PropTypes.string,
  /** Heading */
  heading: PropTypes.string,
  /** Description */
  description: PropTypes.string,
  /** Footer */
  footer: PropTypes.node,
  /** Special message (show when className='is-special') */
  specialMessage: PropTypes.string,
  /** Additional element at bottom of Footer */
  children: PropTypes.node
}

Simple.defaultProps = {
  className: '',
  heading: '',
  description: '',
  footer: '',
  specialMessage: '',
  children: ''
}
