import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  ContainerWrapper
} from './styled'

class ContainerContent extends React.PureComponent {
  render () {
    const {
      className,
      children,
      ui,
      uiFor
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const classes = ClassNames(
      'container',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      className
    )

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}

/**
 * Container description
 * - control site width
 */

export class Container extends React.PureComponent {
  static propTypes = { // TYPE > node, string, number, bool, array, object, symbol, func
    /**
    * [Container] and [Container.Content] - additional classes
    */
    className: PropTypes.string,

    /**
    * [Container] and [Container.Content] - additional elements or text
    */
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ]),

    /**
    * [Container] and [Container.Content] - modifier class for change default multiple UI (parent or children), can reuse
    */
    ui: PropTypes.oneOf([
      // props value
    ]),

    /**
    * [Container] and [Container.Content] - modifier class for change default multiple UI (parent or children), can't reuse
    */
    uiFor: PropTypes.oneOf([
      // props value
    ]),

    /**
    * [Container] - width
    */
    width: PropTypes.oneOf([
      'fluid'
    ]),

    /**
    * [Container] - height
    */
    height: PropTypes.oneOf([
      'fluid',
      'viewport',
      'viewport-half'
    ]),

    /**
    * [Container] - padding
    */
    padding: PropTypes.oneOf([
      'content',
      'content-mobile',
      'content-phablet',
      'content-tablet',
      'content-mobile-phablet',
      'content-mobile-tablet'
    ]),

    /**
    * [Container] - flex row/column aligns
    */
    flexAlign: PropTypes.oneOf([
      'left',
      'right',
      'center',
      'spacebetween',
      'top',
      'bottom',
      'middle',
      'spacebetween-vertical'
    ]),

    /**
    * [Container] - flex align items
    */
    flexAlignItems: PropTypes.oneOf([
      'top',
      'bottom',
      'middle'
    ])
  }

  static Content = ContainerContent

  render () {
    const {
      className,
      children,
      ui,
      uiFor,
      width,
      height,
      padding,
      flexAlign,
      flexAlignItems
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const widthClasses = ClassNames(width)
    const heightClasses = ClassNames(height)
    const paddingClasses = ClassNames(padding)
    const flexAlignClasses = ClassNames(flexAlign)
    const flexAlignItemsClasses = ClassNames(flexAlignItems)
    const classes = ClassNames(
      'container',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      { [`is-width-${widthClasses}`]: widthClasses },
      { [`is-height-${heightClasses}`]: heightClasses },
      { [`is-padding-${paddingClasses}`]: paddingClasses },
      { [`is-flexalign-${flexAlignClasses}`]: flexAlignClasses },
      { [`is-flexalign-vertical-${flexAlignItemsClasses}`]: flexAlignItemsClasses },
      className
    )

    return (
      <ContainerWrapper
        className={classes}
      >
        {children}
      </ContainerWrapper>
    )
  }
}
