import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  CardWrapper
} from './styled'

/**
 * Card
 * - Card component description
 */

export class Card extends React.PureComponent {
  render () {
    const {
      className,
      avatarsSource,
      name,
      ratingIconSource,
      rating,
      countryFlagSource,
      country,
      chatMessageNumber,
      footerLabel,
      footerMessage
    } = this.props

    return (
      <CardWrapper className={
          ClassNames(
            'card',
            className
          )
        }
      >
        <div className='card-body'>
          <div className='card-avatar'>
            <img className='card-avatar-image' alt='Avatar'
              src={avatarsSource}
            />
          </div>
          <div className='card-info'>
            <div className='card-info-heading'>
              {name}
            </div>
            <ul className='card-info-list'>
              <li className='card-info-list-item'>
                <img className='card-info-icon is-star' alt='Rating Icon'
                  src={ratingIconSource}
                />
                <span className='card-info-detail'>
                  {rating}
                </span>
              </li>
              <li className='card-info-list-item'>
                <img className='card-info-icon' alt='Country Icon'
                  src={countryFlagSource}
                />
                <span className='card-info-detail'>
                  {country}
                </span>
              </li>
            </ul>
          </div>
          <div className='card-contact'>
            <div className='card-contact-button'>
              <img className='card-contact-button-icon is-phone' alt='Icon'
                src={require('./images/icon-phone.svg')}
              />
            </div>
            <div className='card-contact-button'>
              <img className='card-contact-button-icon is-chat' alt='Icon'
                src={require('./images/icon-chat.svg')}
              />
              {
                chatMessageNumber &&
                <div className='card-contact-badge'>
                  <span className='card-contact-badge-number'>
                    {chatMessageNumber}
                  </span>
                </div>
              }
            </div>
          </div>
        </div>
        <div className='card-footer'>
          <div className='card-footer-label'>
            {footerLabel}
          </div>
          <p className='card-footer-message'>
            {footerMessage}
          </p>
        </div>
      </CardWrapper>
    )
  }
}

Card.propTypes = { // TYPE > node, string, func, bool
  /**
   * State/Modifier classname for change default UI
  */
  className: PropTypes.oneOf([
    'is-error',
    'is-success'
  ]),
  /**
   * Avatars image source
  */
  avatarsSource: PropTypes.string,
  /**
   * Name
  */
  name: PropTypes.string,
  /**
   * Rating icon source
  */
  ratingIconSource: PropTypes.string,
  /**
   * Rating number
  */
  rating: PropTypes.string,
  /**
   * Country flag source
  */
  countryFlagSource: PropTypes.string,
  /**
   * Country name
  */
  country: PropTypes.string,
  /**
   * Chat message number
  */
  chatMessageNumber: PropTypes.string,
  /**
   * Footer label
  */
  footerLabel: PropTypes.string,
  /**
   * Footer message
  */
  footerMessage: PropTypes.string,
  /** Additional element in component */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ])
}

Card.defaultProps = {
  avatarsSource: require('./images/icon-avatars-default.svg'),
  ratingIconSource: require('./images/icon-star.svg'),
  countryFlagSource: require('./images/icon-flag-united-kingdom.svg'),
  footerLabel: 'Note:'
}
