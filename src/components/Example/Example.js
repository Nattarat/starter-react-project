import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  ExampleWrapper
} from './styled'
// import {
//   PROPS_CLASSES
// } from '../../themes/styles/bases/classes'

/**
 * Example
 * - Example component description
 */



export class Example extends React.PureComponent {
  static defaultProps = {
    ui: 'primary'
  }

  static propTypes = { // TYPE > node, string, func, bool
    /**
    * Additional classes
    */
    className: PropTypes.string,

    /**
    * Additional elements
    */
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ]),

    /**
    * Modifier name for change default UI
    * note: use only for change many style of parent and children
    */
    ui: PropTypes.oneOf([
      'error',
      'success'
    ]),
  }


  render () {
    const {
      className,
      children,
      ui,
      color,
    } = this.props

    const uiClasses = ClassNames(ui)
    const colorClasses = ClassNames(color)

    const Classes = ClassNames(
      'example',
      { [`is-ui-${uiClasses}`]: uiClasses},
      { [`is-color-${colorClasses}`]: colorClasses},
      className,
    )

    return (
      <ExampleWrapper
        className={Classes}
      >
        {children}
      </ExampleWrapper>
    )
  }
}
