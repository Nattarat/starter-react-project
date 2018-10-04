import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import './styled'

class GridColumn extends React.PureComponent {
  render() {
    const {
      className,
      children,
      flexCol,
      flexColMobile,
      flexColPhablet,
      flexColTablet,
      flexColLaptop,
      flexColDesktop,
      flexColLargeDesktop,
      isStackMobile,
      isStackPhablet,
      isStackTablet,
      isStackLaptop,
      isStackDesktop,
      isStackLargeDesktop,
      col,
      colMobile,
      colPhablet,
      colTablet,
      colLaptop,
      colDesktop,
      colLargeDesktop
    } = this.props

    // props for css classes
    const flexColSizes = ClassNames(flexCol)
    const flexColMobileSizes = ClassNames(flexColMobile)
    const flexColPhabletSizes = ClassNames(flexColPhablet)
    const flexColTabletSizes = ClassNames(flexColTablet)
    const flexColLaptopSizes = ClassNames(flexColLaptop)
    const flexColDesktopSizes = ClassNames(flexColDesktop)
    const flexColLargeDesktopSizes = ClassNames(flexColLargeDesktop)
    const colSizes = ClassNames(col)
    const colMobileSizes = ClassNames(colMobile)
    const colPhabletSizes = ClassNames(colPhablet)
    const colTabletSizes = ClassNames(colTablet)
    const colLaptopSizes = ClassNames(colLaptop)
    const colDesktopSizes = ClassNames(colDesktop)
    const colLargeDesktopSizes = ClassNames(colLargeDesktop)
    const classes = ClassNames(
      'grid-column',
      { [`is-fluid-${flexColSizes}`]: flexColSizes },
      { [`is-fluid-${flexColMobileSizes}-mobile`]: flexColMobileSizes },
      { [`is-fluid-${flexColPhabletSizes}-phablet`]: flexColPhabletSizes },
      { [`is-fluid-${flexColTabletSizes}-tablet`]: flexColTabletSizes },
      { [`is-fluid-${flexColLaptopSizes}-laptop`]: flexColLaptopSizes },
      { [`is-fluid-${flexColDesktopSizes}-desktop`]: flexColDesktopSizes },
      { [`is-fluid-${flexColLargeDesktopSizes}-large-desktop`]: flexColLargeDesktopSizes },
      { [`is-stack-mobile`]: isStackMobile },
      { [`is-stack-phablet`]: isStackPhablet },
      { [`is-stack-tablet`]: isStackTablet },
      { [`is-stack-laptop`]: isStackLaptop },
      { [`is-stack-desktop`]: isStackDesktop },
      { [`is-stack-large-desktop`]: isStackLargeDesktop },
      { [`is-${colSizes}`]: colSizes },
      { [`is-${colMobileSizes}-mobile`]: colMobileSizes },
      { [`is-${colPhabletSizes}-phablet`]: colPhabletSizes },
      { [`is-${colTabletSizes}-tablet`]: colTabletSizes },
      { [`is-${colLaptopSizes}-laptop`]: colLaptopSizes },
      { [`is-${colDesktopSizes}-desktop`]: colDesktopSizes },
      { [`is-${colLargeDesktopSizes}-large-desktop`]: colLargeDesktopSizes },
      className
    )

    return (
      <div
        className={classes}
      >
        {children}
      </div>
    )
  }
}

/**
 * Grid description:
 * - 12 Columns system
 * - Breakpoints:
 *    - Mobile        (min 320px)
 *    - Phablet       (min 414px)
 *    - Tablet        (min 768px)
 *    - Laptop        (min 1024px)
 *    - Desktop       (min 1366px)
 *    - Large Desktop (min 1600px)
 */

export class Grid extends React.PureComponent {
  static propTypes = { // TYPE > node, string, func, bool
    /**
    * [Grid] and [Grid.Column] - additional classes
    */
    className: PropTypes.string,

    /**
    * [Grid] and [Grid.Column] - additional elements or text
    */
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ]),

    /**
    * [Grid]
    *
    * - horizontal gutter width(px)
    * - breakpoint suffixs props: Mobile, Phablet, Tablet, Laptop, Desktop, LargeDesktop
    */
    gutter: PropTypes.oneOf([
      '5', '10', '15', '20', '25', '30', '35', '40', '45', '50'
    ]),

    /**
    * [Grid]
    *
    * - vertical gutter width(px)
    * - breakpoint suffixs props: Mobile, Phablet, Tablet, Laptop, Desktop, LargeDesktop
    */
    gutterVertical: PropTypes.oneOf([
      '5', '10', '15', '20', '25', '30', '35', '40', '45', '50'
    ]),

    /**
    * [Grid]
    *
    * - column align
    * - breakpoint suffixs props: Mobile, Phablet, Tablet, Laptop, Desktop, LargeDesktop
    */
    align: PropTypes.oneOf([
      'left', 'right', 'center', 'spacebetween'
    ]),

    /**
    * [Grid.Column] - control width by flex number 1-12
    */
    flexCol: PropTypes.oneOf([
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
    ]),

    /**
    * [Grid.Column] - control width by percent
    */
    col: PropTypes.oneOf([
      '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
    ]),

    /**
    * [Grid.Column] - stack column to full width at breakpoints
    */
    isStackMobile: PropTypes.bool
  }

  static Column = GridColumn

  render () {
    const {
      className,
      children,
      gutter,
      gutterMobile,
      gutterPhablet,
      gutterTablet,
      gutterLaptop,
      gutterDesktop,
      gutterLargeDesktop,
      gutterVertical,
      gutterVerticalMobile,
      gutterVerticalPhablet,
      gutterVerticalTablet,
      gutterVerticalLaptop,
      gutterVerticalDesktop,
      gutterVerticalLargeDesktop,
      align,
      alignMobile,
      alignPhablet,
      alignTablet,
      alignLaptop,
      alignDesktop,
      alignLargeDesktop
    } = this.props

    // props for css classes
    const gutterSizes = ClassNames(gutter)
    const gutterMobileSizes = ClassNames(gutterMobile)
    const gutterPhabletSizes = ClassNames(gutterPhablet)
    const gutterTabletSizes = ClassNames(gutterTablet)
    const gutterLaptopSizes = ClassNames(gutterLaptop)
    const gutterDesktopSizes = ClassNames(gutterDesktop)
    const gutterLargeDesktopSizes = ClassNames(gutterLargeDesktop)
    const gutterVerticalSizes = ClassNames(gutterVertical)
    const gutterVerticalMobileSizes = ClassNames(gutterVerticalMobile)
    const gutterVerticalPhabletSizes = ClassNames(gutterVerticalPhablet)
    const gutterVerticalTabletSizes = ClassNames(gutterVerticalTablet)
    const gutterVerticalLaptopSizes = ClassNames(gutterVerticalLaptop)
    const gutterVerticalDesktopSizes = ClassNames(gutterVerticalDesktop)
    const gutterVerticalLargeDesktopSizes = ClassNames(gutterVerticalLargeDesktop)
    const alignDirection = ClassNames(align)
    const alignMobileDirection = ClassNames(alignMobile)
    const alignPhabletDirection = ClassNames(alignPhablet)
    const alignTabletDirection = ClassNames(alignTablet)
    const alignLaptopDirection = ClassNames(alignLaptop)
    const alignDesktopDirection = ClassNames(alignDesktop)
    const alignLargeDesktopDirection = ClassNames(alignLargeDesktop)
    const classes = ClassNames(
      'grid',
      { [`is-gutter-${gutterSizes}`]: gutterSizes },
      { [`is-gutter-${gutterMobileSizes}-mobile`]: gutterMobileSizes },
      { [`is-gutter-${gutterPhabletSizes}-phablet`]: gutterPhabletSizes },
      { [`is-gutter-${gutterTabletSizes}-tablet`]: gutterTabletSizes },
      { [`is-gutter-${gutterLaptopSizes}-laptop`]: gutterLaptopSizes },
      { [`is-gutter-${gutterDesktopSizes}-desktop`]: gutterDesktopSizes },
      { [`is-gutter-${gutterLargeDesktopSizes}-large-desktop`]: gutterLargeDesktopSizes },
      { [`is-gutter-vertical-${gutterVerticalSizes}`]: gutterVerticalSizes },
      { [`is-gutter-vertical-${gutterVerticalMobileSizes}-mobile`]: gutterVerticalMobileSizes },
      { [`is-gutter-vertical-${gutterVerticalPhabletSizes}-phablet`]: gutterVerticalPhabletSizes },
      { [`is-gutter-vertical-${gutterVerticalTabletSizes}-tablet`]: gutterVerticalTabletSizes },
      { [`is-gutter-vertical-${gutterVerticalLaptopSizes}-laptop`]: gutterVerticalLaptopSizes },
      { [`is-gutter-vertical-${gutterVerticalDesktopSizes}-desktop`]: gutterVerticalDesktopSizes },
      { [`is-gutter-vertical-${gutterVerticalLargeDesktopSizes}-large-desktop`]: gutterVerticalLargeDesktopSizes },
      { [`is-align-${alignDirection}`]: alignDirection },
      { [`is-align-${alignMobileDirection}-mobile`]: alignMobileDirection },
      { [`is-align-${alignPhabletDirection}-phablet`]: alignPhabletDirection },
      { [`is-align-${alignTabletDirection}-tablet`]: alignTabletDirection },
      { [`is-align-${alignLaptopDirection}-laptop`]: alignLaptopDirection },
      { [`is-align-${alignDesktopDirection}-desktop`]: alignDesktopDirection },
      { [`is-align-${alignLargeDesktopDirection}-desktop`]: alignLargeDesktopDirection },
      className
    )

    return (
      <div
        className={classes}
      >
        {children}
      </div>
    )
  }
}
