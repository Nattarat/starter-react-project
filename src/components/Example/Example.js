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
      fontColor,
      bgColor
    } = this.props

    // props for css classes
    const fontColorClasses = ClassNames(fontColor)
    const bgColorClasses = ClassNames(bgColor)
    const classes = ClassNames(
      'example-children',
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
    srcIcon: require('./styleguide-images/icon-example.svg')
  }

  static propTypes = { // TYPE > node, string, func, bool
    /**
    * [Example] and [Example.Children] - modifier name for change default multiple UI (parent and children)
    */
    ui: PropTypes.oneOf([
      'error',
      'success'
    ]),

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
      ui,
      children,
      flexAlign,
      srcIcon
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const flexAlignClasses = ClassNames(flexAlign)
    const classes = ClassNames(
      'example',
      { [`is-ui-${uiClasses}`]: uiClasses },
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
