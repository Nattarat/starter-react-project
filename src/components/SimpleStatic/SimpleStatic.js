import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  SimpleStaticWrapper,
  SimpleStaticHeaderWrapper,
  SimpleStaticBodyWrapper,
  SimpleStaticFooterWrapper,
  SimpleStaticSpecialMessageWrapper
} from './styled'

/**
 * SimpleStatic
 * - SimpleStatic component description
 */

class SimpleStaticHeader extends React.PureComponent {
  render () {
    const {
      children
    } = this.props
  
    return (
      <SimpleStaticHeaderWrapper className='simplestatic-header'>
        {children}
      </SimpleStaticHeaderWrapper>
    )
  }
}

class SimpleStaticBody extends React.PureComponent {
  render () {
    const {
      children
    } = this.props
  
    return (
      <SimpleStaticBodyWrapper className='simplestatic-body'>
        {children}
      </SimpleStaticBodyWrapper>
    )
  }
}

class SimpleStaticFooter extends React.PureComponent {
  render () {
    const {
      children
    } = this.props
  
    return (
      <SimpleStaticFooterWrapper className='simplestatic-footer'>
        {children}
      </SimpleStaticFooterWrapper>
    )
  }
}

class SimpleStaticSpecialMessage extends React.PureComponent {
  render () {
    const {
      children
    } = this.props
  
    return (
      <SimpleStaticSpecialMessageWrapper className='simplestatic-special-message'>
        {children}
      </SimpleStaticSpecialMessageWrapper>
    )
  }
}

export class SimpleStatic extends React.PureComponent {
  static Header = SimpleStaticHeader
  static Body = SimpleStaticBody
  static Footer = SimpleStaticFooter
  static SpecialMessage = SimpleStaticSpecialMessage

  render () {
    const {
      className,
      children
    } = this.props

    return (
      <SimpleStaticWrapper className={
          ClassNames(
            'simplestatic',
            className
          )
        }
      >
        {children}
      </SimpleStaticWrapper>
    )
  }
}

SimpleStatic.propTypes = { // TYPE > node, string, func, bool
  /**
   * State/Modifier classname for change default UI
  */
  className: PropTypes.oneOf([
    '',
    'is-error',
    'is-success'
  ]),
  /** Additional element in component */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ])
}

SimpleStatic.defaultProps = {
  // PROPS_NAME: ''
}
