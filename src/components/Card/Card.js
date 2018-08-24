import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  CardWrapper,
  CardBodyWrapper,
  CardAvatarWrapper,
  CardInfoWrapper,
  CardContactWrapper,
  CardFooterWrapper
} from './styled'

/**
 * Card
 * - Card component description
 */

// Body
// ------------------------------------------------------------
class CardBody extends React.PureComponent {
  render () {
    const {
      children
    } = this.props
  
    return (
      <CardBodyWrapper className='card-body'>
        {children}
      </CardBodyWrapper>
    )
  }
}

// Avatar
// ------------------------------------------------------------
class CardAvatar extends React.PureComponent {
  render () {
    const {
      src
    } = this.props
  
    return (
      <CardAvatarWrapper className='card-avatar'>
        <img className='card-avatar-image' src={src} alt='Avatar' />
      </CardAvatarWrapper>
    )
  }
}

// Info
// ------------------------------------------------------------
class CardInfo extends React.PureComponent {
  render () {
    const {
      children
    } = this.props
  
    return (
      <CardInfoWrapper className='card-info'>
        {children}
      </CardInfoWrapper>
    )
  }
}

// Contact
// ------------------------------------------------------------
class CardContact extends React.PureComponent {
  render () {
    const {
      children
    } = this.props
  
    return (
      <CardContactWrapper className='card-contact'>
        {children}
      </CardContactWrapper>
    )
  }
}

// Footer
// ------------------------------------------------------------
class CardFooter extends React.PureComponent {
  render () {
    const {
      children
    } = this.props
  
    return (
      <CardFooterWrapper className='card-footer'>
        {children}
      </CardFooterWrapper>
    )
  }
}

// Main
// ============================================================
export class Card extends React.PureComponent {
  static Body = CardBody
  static Avatar = CardAvatar
  static Info = CardInfo
  static Contact = CardContact
  static Footer = CardFooter

  render () {
    const {
      className,
      children
    } = this.props

    return (
      <CardWrapper className={
          ClassNames(
            'card',
            className
          )
        }
      >
        {children}
      </CardWrapper>
    )
  }
}

Card.propTypes = { // TYPE > node, string, func, bool
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

Card.defaultProps = {
  // PROPS_NAME: ''
}
