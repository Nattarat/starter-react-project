import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  ExampleWrapper
} from './styled'

/**
 * Example
 * - Example component description
 */

class ExampleChildren extends React.PureComponent {
  render () {
    const {
      textColor,
      bgColor,
      className,
      children
    } = this.props

    // props for css classes
    const textColorClasses = ClassNames(textColor)
    const bgColorClasses = ClassNames(bgColor)
    const classes = ClassNames(
      'example-children',
      { [`is-textcolor-${textColorClasses}`]: textColorClasses },
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

const TEST = [
  'horizontal-start',
  'horizontal-end',
  'horizontal-spacebetween'
]

export class Example extends React.PureComponent {
  static defaultProps = {
    srcIcon: require('./styleguide-images/icon-example.svg')
  }

  static propTypes = { // TYPE > node, string, func, bool
    /**
    * Modifier name for change default multiple UI (parent and children)
    */
    ui: PropTypes.oneOf([
      'error',
      'success'
    ]),

    /**
    * Modifier name for change default single UI (children)
    */
    // flexAlign: PropTypes.oneOf([
    //   'horizontal-start',
    //   'horizontal-end',
    //   'horizontal-spacebetween'
    // ]),

    flexAlign: PropTypes.oneOf(TEST),

    /**
    * Additional classes
    */
    className: PropTypes.string,

    /**
    * Source icon (path/url)
    */
    srcIcon: PropTypes.string,

    /**
    * Additional elements
    */
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ])
  }

  static Children = ExampleChildren

  render () {
    const {
      ui,
      flexAlign,
      className,
      srcIcon,
      children
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const flexAlignClasses = ClassNames(flexAlign)
    const classes = ClassNames(
      'example',
      { [`is-${uiClasses}`]: uiClasses },
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
