import {
  css
} from 'styled-components'
import {
  default as VARIABLES
} from 'themes/styles/bases/variables'

// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Props (props collection):
//
// * Text color
//   - Using in styled.js    >>> ${props => PROPS.TEXT_COLOR(props)}
//   - Using in Component.js >>> textColor='black'
//
// * Background color
//   - Using in styled.js    >>> ${props => PROPS.BACKGROUND_COLOR(props)}
//   - Using in Component.js >>> bgColor='bgColor'
//
// * Flex align
//   - Using in styled.js    >>> ${props => PROPS.FLEX_ALIGN(props)}
//   - Using in Component.js >>> flexAlign='rowHLVT'
//
// * Spacing (Margin/Padding)
//   - Using in styled.js    >>> ${props => PROPS.SPACING(props)}
//   - Using in Component.js >>> spacing='topMn' / spacing='topMnPadding'
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

export default {
  // Text color
  // ============================================================
  TEXT_COLOR: props => {
    switch (props.textColor) {
      // Base
      // ------------------------------ */
      case 'black':
        return css`
          color: ${VARIABLES.COLORS.BLACK};
        `
      case 'white':
        return css`
          color: ${VARIABLES.COLORS.WHITE};
        `
      case 'red':
        return css`
          color: ${VARIABLES.COLORS.RED};
        `
      case 'green':
        return css`
          color: ${VARIABLES.COLORS.GREEN};
        `
      case 'blue':
        return css`
          color: ${VARIABLES.COLORS.BLUE};
        `

      // Role
      // ------------------------------ */
      case 'textHead':
        return css`
          color: ${VARIABLES.COLORS.TEXT_HEAD};
        `
      case 'textSubHead':
        return css`
          color: ${VARIABLES.COLORS.TEXT_SUB_HEAD};
        `
      case 'textDetail':
        return css`
          color: ${VARIABLES.COLORS.TEXT_DETAIL};
        `
      case 'textLink':
        return css`
          color: ${VARIABLES.COLORS.TEXT_LINK};
        `

      // Overlay
      // ------------------------------ */
      case 'overlay1':
        return css`
          color: ${VARIABLES.COLORS.OVERLAY_1};
        `

      default:
        return ''
    }
  },

  // Background color
  // ============================================================
  BACKGROUND_COLOR: props => {
    switch (props.bgColor) { // Can't use backgroundColor for props name because this name is same props in React
      // Base
      // ------------------------------ */
      case 'black':
        return css`
          color: ${VARIABLES.COLORS.BLACK};
        `
      case 'white':
        return css`
          color: ${VARIABLES.COLORS.WHITE};
        `
      case 'red':
        return css`
          color: ${VARIABLES.COLORS.RED};
        `
      case 'green':
        return css`
          color: ${VARIABLES.COLORS.GREEN};
        `
      case 'blue':
        return css`
          color: ${VARIABLES.COLORS.BLUE};
        `

      // Role
      // ------------------------------ */
      case 'textHead':
        return css`
          color: ${VARIABLES.COLORS.TEXT_HEAD};
        `
      case 'textSubHead':
        return css`
          color: ${VARIABLES.COLORS.TEXT_SUB_HEAD};
        `
      case 'textDetail':
        return css`
          color: ${VARIABLES.COLORS.TEXT_DETAIL};
        `
      case 'textLink':
        return css`
          color: ${VARIABLES.COLORS.TEXT_LINK};
        `

      // Overlay
      // ------------------------------ */
      case 'overlay1':
        return css`
          color: ${VARIABLES.COLORS.OVERLAY_1};
        `

      default:
        return ''
    }
  },

  // Flex align
  //
  // Long name case is clear meaning but inconvenient in actually using
  // so that use abbreviation for help this problem
  // H = Horizontal
  // V = Vertical
  // L = Left
  // C = Center
  // R = Right
  // T = Top
  // B = Bottom
  // S = Space between
  //
  // ============================================================
  FLEX_ALIGN: props => {
    switch (props.flexAlign) {
      // Row
      // ------------------------------ */

      // VERTICAL TOP

      // Horizontal left / Vertical top
      case 'rowHLVT':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: flex-start;
          align-items: flex-start;
        `
      // Horizontal center / Vertical top
      case 'rowHCVT':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: center;
          align-items: flex-start;
        `
      // Horizontal right / Vertical top
      case 'rowHRVT':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: flex-end;
          align-items: flex-start;
        `
      // Horizontal space between / Vertical top
      case 'rowHSVT':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
        `

      // VERTICAL CENTER

      // Horizontal left / Vertical center
      case 'rowHLVC':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
        `
      // Horizontal center / Vertical center
      case 'rowHCVC':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        `
      // Horizontal right / Vertical center
      case 'rowHRVC':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;
        `
      // Horizontal space between / Vertical center
      case 'rowHSVC':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        `

      // VERTICAL BOTTOM

      // Horizontal left / Vertical bottom
      case 'rowHLVB':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: flex-start;
          align-items: flex-end;
        `
      // Horizontal center / Vertical bottom
      case 'rowHCVB':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: center;
          align-items: flex-end;
        `
      // Horizontal right / Vertical bottom
      case 'rowHRVB':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: flex-end;
          align-items: flex-end;
        `
      // Horizontal space between / Vertical bottom
      case 'rowHSVB':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
        `

      // Column
      // ------------------------------ */

      // VERTICAL TOP

      // Horizontal left / Vertical top
      case 'columnHLVT':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
        `
      // Horizontal center / Vertical top
      case 'columnHCVT':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        `
      // Horizontal right / Vertical top
      case 'columnHRVT':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
        `
      // Horizontal space between / Vertical top
      case 'columnHSVT':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
        `

      // VERTICAL CENTER

      // Horizontal left / Vertical center
      case 'columnHLVC':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        `
      // Horizontal center / Vertical center
      case 'columnHCVC':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `
      // Horizontal right / Vertical center
      case 'columnHRVC':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: flex-end;
          justify-content: center;
        `
      // Horizontal space between / Vertical center
      case 'columnHSVC':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        `

      // VERTICAL BOTTOM

      // Horizontal left / Vertical bottom
      case 'columnHLVB':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
        `
      // Horizontal center / Vertical bottom
      case 'columnHCVB':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
        `
      // Horizontal right / Vertical bottom
      case 'columnHRVB':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-end;
        `
      // Horizontal space between / Vertical bottom
      case 'columnHSVB':
        return css`
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: flex-end;
          justify-content: space-between;
        `

      default:
        return ''
    }
  },

  // Spacing
  // ============================================================
  SPACING: props => {
    switch (props.spacing) {
      // Top
      // ------------------------------ */
      // Mini
      case 'topMn':
        return css`
          margin-top: ${VARIABLES.SPACINGS.MN};
        `
      // Tiny
      case 'topTn':
        return css`
          margin-top: ${VARIABLES.SPACINGS.TN};
        `
      // Extra extra small
      case 'topXxs':
        return css`
          margin-top: ${VARIABLES.SPACINGS.XXS};
        `
      // Extra small
      case 'topXs':
        return css`
          margin-top: ${VARIABLES.SPACINGS.XS};
        `
      // Small
      case 'topSm':
        return css`
          margin-top: ${VARIABLES.SPACINGS.SM};
        `
      // Medium
      case 'topMd':
        return css`
          margin-top: ${VARIABLES.SPACINGS.MD};
        `
      // Large
      case 'topLg':
        return css`
          margin-top: ${VARIABLES.SPACINGS.LG};
        `
      // Extra large
      case 'topXl':
        return css`
          margin-top: ${VARIABLES.SPACINGS.XL};
        `
      // Extra extra large
      case 'topXxl':
        return css`
          margin-top: ${VARIABLES.SPACINGS.XXL};
        `
      // Big
      case 'topBg':
        return css`
          margin-top: ${VARIABLES.SPACINGS.BG};
        `
      // Huge
      case 'topHg':
        return css`
          margin-top: ${VARIABLES.SPACINGS.HG};
        `
      // Massive
      case 'topMs':
        return css`
          margin-top: ${VARIABLES.SPACINGS.MS};
        `

      // Top (Padding)
      // ------------------------------ */
      // Mini
      case 'topMnPadding':
        return css`
          padding-top: ${VARIABLES.SPACINGS.MN};
        `
      // Tiny
      case 'topTnPadding':
        return css`
          padding-top: ${VARIABLES.SPACINGS.TN};
        `
      // Extra extra small
      case 'topXxsPadding':
        return css`
          padding-top: ${VARIABLES.SPACINGS.XXS};
        `
      // Extra small
      case 'topXsPadding':
        return css`
          padding-top: ${VARIABLES.SPACINGS.XS};
        `
      // Small
      case 'topSmPadding':
        return css`
          padding-top: ${VARIABLES.SPACINGS.SM};
        `
      // Medium
      case 'topMdPadding':
        return css`
          padding-top: ${VARIABLES.SPACINGS.MD};
        `
      // Large
      case 'topLgPadding':
        return css`
          padding-top: ${VARIABLES.SPACINGS.LG};
        `
      // Extra large
      case 'topXlPadding':
        return css`
          padding-top: ${VARIABLES.SPACINGS.XL};
        `
      // Extra extra large
      case 'topXxlPadding':
        return css`
          padding-top: ${VARIABLES.SPACINGS.XXL};
        `
      // Big
      case 'topBgPadding':
        return css`
          padding-top: ${VARIABLES.SPACINGS.BG};
        `
      // Huge
      case 'topHgPadding':
        return css`
          padding-top: ${VARIABLES.SPACINGS.HG};
        `
      // Massive
      case 'topMsPadding':
        return css`
          padding-top: ${VARIABLES.SPACINGS.MS};
        `

      // Right
      // ------------------------------ */
      // Mini
      case 'rightMn':
        return css`
          margin-right: ${VARIABLES.SPACINGS.MN};
        `
      // Tiny
      case 'rightTn':
        return css`
          margin-right: ${VARIABLES.SPACINGS.TN};
        `
      // Extra extra small
      case 'rightXxs':
        return css`
          margin-right: ${VARIABLES.SPACINGS.XXS};
        `
      // Extra small
      case 'rightXs':
        return css`
          margin-right: ${VARIABLES.SPACINGS.XS};
        `
      // Small
      case 'rightSm':
        return css`
          margin-right: ${VARIABLES.SPACINGS.SM};
        `
      // Medium
      case 'rightMd':
        return css`
          margin-right: ${VARIABLES.SPACINGS.MD};
        `
      // Large
      case 'rightLg':
        return css`
          margin-right: ${VARIABLES.SPACINGS.LG};
        `
      // Extra large
      case 'rightXl':
        return css`
          margin-right: ${VARIABLES.SPACINGS.XL};
        `
      // Extra extra large
      case 'rightXxl':
        return css`
          margin-right: ${VARIABLES.SPACINGS.XXL};
        `
      // Big
      case 'rightBg':
        return css`
          margin-right: ${VARIABLES.SPACINGS.BG};
        `
      // Huge
      case 'rightHg':
        return css`
          margin-right: ${VARIABLES.SPACINGS.HG};
        `
      // Massive
      case 'rightMs':
        return css`
          margin-right: ${VARIABLES.SPACINGS.MS};
        `

      // Right (Padding)
      // ------------------------------ */
      // Mini
      case 'rightMnPadding':
        return css`
          padding-right: ${VARIABLES.SPACINGS.MN};
        `
      // Tiny
      case 'rightTnPadding':
        return css`
          padding-right: ${VARIABLES.SPACINGS.TN};
        `
      // Extra extra small
      case 'rightXxsPadding':
        return css`
          padding-right: ${VARIABLES.SPACINGS.XXS};
        `
      // Extra small
      case 'rightXsPadding':
        return css`
          padding-right: ${VARIABLES.SPACINGS.XS};
        `
      // Small
      case 'rightSmPadding':
        return css`
          padding-right: ${VARIABLES.SPACINGS.SM};
        `
      // Medium
      case 'rightMdPadding':
        return css`
          padding-right: ${VARIABLES.SPACINGS.MD};
        `
      // Large
      case 'rightLgPadding':
        return css`
          padding-right: ${VARIABLES.SPACINGS.LG};
        `
      // Extra large
      case 'rightXlPadding':
        return css`
          padding-right: ${VARIABLES.SPACINGS.XL};
        `
      // Extra extra large
      case 'rightXxlPadding':
        return css`
          padding-right: ${VARIABLES.SPACINGS.XXL};
        `
      // Big
      case 'rightBgPadding':
        return css`
          padding-right: ${VARIABLES.SPACINGS.BG};
        `
      // Huge
      case 'rightHgPadding':
        return css`
          padding-right: ${VARIABLES.SPACINGS.HG};
        `
      // Massive
      case 'rightMsPadding':
        return css`
          padding-right: ${VARIABLES.SPACINGS.MS};
        `

      // Bottom
      // ------------------------------ */
      // Mini
      case 'bottomMn':
        return css`
          margin-bottom: ${VARIABLES.SPACINGS.MN};
        `
      // Tiny
      case 'bottomTn':
        return css`
          margin-bottom: ${VARIABLES.SPACINGS.TN};
        `
      // Extra extra small
      case 'bottomXxs':
        return css`
          margin-bottom: ${VARIABLES.SPACINGS.XXS};
        `
      // Extra small
      case 'bottomXs':
        return css`
          margin-bottom: ${VARIABLES.SPACINGS.XS};
        `
      // Small
      case 'bottomSm':
        return css`
          margin-bottom: ${VARIABLES.SPACINGS.SM};
        `
      // Medium
      case 'bottomMd':
        return css`
          margin-bottom: ${VARIABLES.SPACINGS.MD};
        `
      // Large
      case 'bottomLg':
        return css`
          margin-bottom: ${VARIABLES.SPACINGS.LG};
        `
      // Extra large
      case 'bottomXl':
        return css`
          margin-bottom: ${VARIABLES.SPACINGS.XL};
        `
      // Extra extra large
      case 'bottomXxl':
        return css`
          margin-bottom: ${VARIABLES.SPACINGS.XXL};
        `
      // Big
      case 'bottomBg':
        return css`
          margin-bottom: ${VARIABLES.SPACINGS.BG};
        `
      // Huge
      case 'bottomHg':
        return css`
          margin-bottom: ${VARIABLES.SPACINGS.HG};
        `
      // Massive
      case 'bottomMs':
        return css`
          margin-bottom: ${VARIABLES.SPACINGS.MS};
        `

      // Bottom (Padding)
      // ------------------------------ */
      // Mini
      case 'bottomMnPadding':
        return css`
          padding-bottom: ${VARIABLES.SPACINGS.MN};
        `
      // Tiny
      case 'bottomTnPadding':
        return css`
          padding-bottom: ${VARIABLES.SPACINGS.TN};
        `
      // Extra extra small
      case 'bottomXxsPadding':
        return css`
          padding-bottom: ${VARIABLES.SPACINGS.XXS};
        `
      // Extra small
      case 'bottomXsPadding':
        return css`
          padding-bottom: ${VARIABLES.SPACINGS.XS};
        `
      // Small
      case 'bottomSmPadding':
        return css`
          padding-bottom: ${VARIABLES.SPACINGS.SM};
        `
      // Medium
      case 'bottomMdPadding':
        return css`
          padding-bottom: ${VARIABLES.SPACINGS.MD};
        `
      // Large
      case 'bottomLgPadding':
        return css`
          padding-bottom: ${VARIABLES.SPACINGS.LG};
        `
      // Extra large
      case 'bottomXlPadding':
        return css`
          padding-bottom: ${VARIABLES.SPACINGS.XL};
        `
      // Extra extra large
      case 'bottomXxlPadding':
        return css`
          padding-bottom: ${VARIABLES.SPACINGS.XXL};
        `
      // Big
      case 'bottomBgPadding':
        return css`
          padding-bottom: ${VARIABLES.SPACINGS.BG};
        `
      // Huge
      case 'bottomHgPadding':
        return css`
          padding-bottom: ${VARIABLES.SPACINGS.HG};
        `
      // Massive
      case 'bottomMsPadding':
        return css`
          padding-bottom: ${VARIABLES.SPACINGS.MS};
        `

      // Left
      // ------------------------------ */
      // Mini
      case 'leftMn':
        return css`
          margin-left: ${VARIABLES.SPACINGS.MN};
        `
      // Tiny
      case 'leftTn':
        return css`
          margin-left: ${VARIABLES.SPACINGS.TN};
        `
      // Extra extra small
      case 'leftXxs':
        return css`
          margin-left: ${VARIABLES.SPACINGS.XXS};
        `
      // Extra small
      case 'leftXs':
        return css`
          margin-left: ${VARIABLES.SPACINGS.XS};
        `
      // Small
      case 'leftSm':
        return css`
          margin-left: ${VARIABLES.SPACINGS.SM};
        `
      // Medium
      case 'leftMd':
        return css`
          margin-left: ${VARIABLES.SPACINGS.MD};
        `
      // Large
      case 'leftLg':
        return css`
          margin-left: ${VARIABLES.SPACINGS.LG};
        `
      // Extra large
      case 'leftXl':
        return css`
          margin-left: ${VARIABLES.SPACINGS.XL};
        `
      // Extra extra large
      case 'leftXxl':
        return css`
          margin-left: ${VARIABLES.SPACINGS.XXL};
        `
      // Big
      case 'leftBg':
        return css`
          margin-left: ${VARIABLES.SPACINGS.BG};
        `
      // Huge
      case 'leftHg':
        return css`
          margin-left: ${VARIABLES.SPACINGS.HG};
        `
      // Massive
      case 'leftMs':
        return css`
          margin-left: ${VARIABLES.SPACINGS.MS};
        `

      // Left (Padding)
      // ------------------------------ */
      // Mini
      case 'leftMnPadding':
        return css`
          padding-left: ${VARIABLES.SPACINGS.MN};
        `
      // Tiny
      case 'leftTnPadding':
        return css`
          padding-left: ${VARIABLES.SPACINGS.TN};
        `
      // Extra extra small
      case 'leftXxsPadding':
        return css`
          padding-left: ${VARIABLES.SPACINGS.XXS};
        `
      // Extra small
      case 'leftXsPadding':
        return css`
          padding-left: ${VARIABLES.SPACINGS.XS};
        `
      // Small
      case 'leftSmPadding':
        return css`
          padding-left: ${VARIABLES.SPACINGS.SM};
        `
      // Medium
      case 'leftMdPadding':
        return css`
          padding-left: ${VARIABLES.SPACINGS.MD};
        `
      // Large
      case 'leftLgPadding':
        return css`
          padding-left: ${VARIABLES.SPACINGS.LG};
        `
      // Extra large
      case 'leftXlPadding':
        return css`
          padding-left: ${VARIABLES.SPACINGS.XL};
        `
      // Extra extra large
      case 'leftXxlPadding':
        return css`
          padding-left: ${VARIABLES.SPACINGS.XXL};
        `
      // Big
      case 'leftBgPadding':
        return css`
          padding-left: ${VARIABLES.SPACINGS.BG};
        `
      // Huge
      case 'leftHgPadding':
        return css`
          padding-left: ${VARIABLES.SPACINGS.HG};
        `
      // Massive
      case 'leftMsPadding':
        return css`
          padding-left: ${VARIABLES.SPACINGS.MS};
        `

      default:
        return ''
    }
  },
}
