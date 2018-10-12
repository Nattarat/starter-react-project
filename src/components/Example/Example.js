import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  ExampleWrapper
} from './styled'

class ExampleChildren extends React.PureComponent {
  render () {
    const {
      className,
      children,
      ui,
      uiFor,
      fontColor,
      bgColor
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const fontColorClasses = ClassNames(fontColor)
    const bgColorClasses = ClassNames(bgColor)
    const classes = ClassNames(
      'example-children',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiForClasses}`]: uiForClasses },
      { [`is-fontcolor-${fontColorClasses}`]: fontColorClasses },
      { [`is-bgcolor-${bgColorClasses}`]: bgColorClasses },
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
 * Example description
 * - ...
 */

export class Example extends React.PureComponent {
  static defaultProps = {
    srcIcon: require('./images/icon-example.svg')
  }

  static propTypes = { // TYPE > node, string, func, bool
    /**
    * [Example] and [Example.Children] - additional classes
    */
    className: PropTypes.string,

    /**
    * [Example] and [Example.Children] - additional elements or text
    */
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ]),

    /**
    * [Example] and [Example.Children] - modifier class for change default multiple UI (parent or children), can reuse
    */
    ui: PropTypes.oneOf([
      'error',
      'success'
    ]),

    /**
    * [Example] and [Example.Children] - modifier class for change default multiple UI (parent or children), can't reuse
    */
    uiFor: PropTypes.oneOf([
      // props value
    ]),

    /**
    * [Example] - children align
    * , see enum at src/themes/styles/helpers/utilities.js
    */
    flexAlign: PropTypes.string,

    /**
    * [Example] - source icon (path/url)
    */
    srcIcon: PropTypes.string,

    /**
    * [Example.Children] - text color
    * , see enum at src/themes/styles/helpers/utilities.js
    */
    fontColor: PropTypes.string,

    /**
    * [Example.Children] - background color
    * , see enum at src/themes/styles/helpers/utilities.js
    */
    bgColor: PropTypes.string
  }

  static Children = ExampleChildren

  render () {
    const {
      className,
      children,
      ui,
      uiFor,
      flexAlign,
      srcIcon
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const flexAlignClasses = ClassNames(flexAlign)
    const classes = ClassNames(
      'example',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiClasses}`]: uiForClasses },
      { [`is-flexalign-${flexAlignClasses}`]: flexAlignClasses },
      className
    )

    return (
      <ExampleWrapper
        className={classes}
      >
        <img className='example-icon' alt='Icon'
          src={srcIcon}
        />
        {children}
      </ExampleWrapper>
    )
  }
}
