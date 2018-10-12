import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  BootstrapWrapper
} from './styled'

/**
 * Bootstrap description
 * - Bootstrap v4.1.3 (https://github.com/twbs/bootstrap)
 * - Class components:
 *    - Grids (https://getbootstrap.com/docs/4.1/layout/grid/)
 */

export class Bootstrap extends React.PureComponent {
  static propTypes = { // TYPE > node, string, number, bool, array, object, symbol, func
    /**
    * [Bootstrap] and [Bootstrap.Children] - additional elements or text
    */
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ])
  }

  render () {
    const {
      children
    } = this.props

    // props for css classes
    const classes = ClassNames(
      'bootstrap'
    )

    return (
      <BootstrapWrapper
        className={classes}
      >
        {children}
      </BootstrapWrapper>
    )
  }
}
