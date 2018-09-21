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
     * State/Modifier classname for change default UI
    */
    className: PropTypes.oneOf([
      'is-error',
      'is-success'
    ]),
    /** Description text */
    description: PropTypes.string,
    /** Additional element in component */
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ])
  }


  render () {
    const {
      className,
      description,
      children,
      ui,
      a,
      b
    } = this.props

    const uiClasses = ClassNames(ui)
    const aClasses = ClassNames(a)
    const bClasses = ClassNames(b)

    const Classes = ClassNames(
      'example',
      className,
      'is-ui-' + uiClasses,
      'is-a-' + aClasses,
      'is-b-' + bClasses
    )

    console.log(ui)

    return (
      <ExampleWrapper className={Classes}
      >
        <div className='starter-body'>
          {description}
        </div>
        {children}
      </ExampleWrapper>
    )
  }
}

