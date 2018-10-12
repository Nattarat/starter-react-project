import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import './css/slick.min.css'
import {
  SlickCarouselWrapper
} from './styled'

class SlickCarouselItam extends React.PureComponent {
  render () {
    const {
      className,
      children,
      ui,
      uiFor,
      href,
      onClick,
      src
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'slick-carousel-item',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <a
        className={classes}
        href={href}
        onClick={onClick}
      >
        <img className='slick-carousel-item-image' src={src} alt='Banner' />
        {children}
      </a>
    )
  }
}

/**
 * SlickCarousel description
 * - ...
 */

export class SlickCarousel extends React.PureComponent {
  static defaultProps = {
    options: {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }

  static propTypes = { // TYPE > node, string, number, bool, array, object, symbol, func
    /**
    * [SlickCarousel] and [SlickCarousel.Children] - additional classes
    */
    className: PropTypes.string,

    /**
    * [SlickCarousel] and [SlickCarousel.Children] - additional elements or text
    */
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ]),

    /**
    * [SlickCarousel] - modifier class for change default multiple UI (parent or children), can reuse
    */
    ui: PropTypes.oneOf([
      // props value
    ]),

    /**
    * [SlickCarousel] - modifier class for change default multiple UI (parent or children), can't reuse
    */
    uiFor: PropTypes.oneOf([
      // props value
    ]),

    /**
    * [SlickCarousel] - slick carousel options (https://react-slick.neostack.com/docs/api/)
    */
    options: PropTypes.object
  }

  static Item = SlickCarouselItam

  render () {
    const {
      className,
      children,
      ui,
      uiFor,
      options
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'slick-carousel',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <SlickCarouselWrapper
        className={classes}
      >
        <Slider
          {...options}
        >
          {children}
        </Slider>
      </SlickCarouselWrapper>
    )
  }
}
