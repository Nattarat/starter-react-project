import {
  css
} from 'styled-components'
import {
  default as VARIABLES
} from 'themes/styles/bases/variables'

// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Typographys:
//
// * First regular (Prompt Regular)
//   - FIRST_REGULAR_MN  (12px)
//   - FIRST_REGULAR_TN  (14px)
//   - FIRST_REGULAR_XXS (16px)
//   - FIRST_REGULAR_XS  (18px)
//   - FIRST_REGULAR_SM  (20px)
//   - FIRST_REGULAR_MD  (24px)
//   - FIRST_REGULAR_LG  (48px)
//
// * First medium (Prompt Medium)
//   - FIRST_MEDIUM_MN  (12px)
//   - FIRST_MEDIUM_TN  (14px)
//   - FIRST_MEDIUM_XXS (16px)
//   - FIRST_MEDIUM_XS  (18px)
//   - FIRST_MEDIUM_SM  (20px)
//   - FIRST_MEDIUM_MD  (24px)
//   - FIRST_MEDIUM_LG  (48px)
//
// * First bold (Prompt Bold)
//   - FIRST_BOLD_MN  (12px)
//   - FIRST_BOLD_TN  (14px)
//   - FIRST_BOLD_XXS (16px)
//   - FIRST_BOLD_XS  (18px)
//   - FIRST_BOLD_SM  (20px)
//   - FIRST_BOLD_MD  (24px)
//   - FIRST_BOLD_LG  (48px)
//
// * Second regular (Thonburi Regular)
//   - SECOND_REGULAR_MN  (12px)
//   - SECOND_REGULAR_TN  (14px)
//   - SECOND_REGULAR_XXS (16px)
//   - SECOND_REGULAR_XS  (18px)
//   - SECOND_REGULAR_SM  (20px)
//   - SECOND_REGULAR_MD  (24px)
//   - SECOND_REGULAR_LG  (48px)
//
// * Second bold (Thonburi Bold)
//   - SECOND_BOLD_MN  (12px)
//   - SECOND_BOLD_TN  (14px)
//   - SECOND_BOLD_XXS (16px)
//   - SECOND_BOLD_XS  (18px)
//   - SECOND_BOLD_SM  (20px)
//   - SECOND_BOLD_MD  (24px)
//   - SECOND_BOLD_LG  (48px)
//
// Notice: Color, Hover/Focus can set at Global or Scaffolding
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

// Text default style
// ============================================================
const TEXT_DEFAULT = css`
  font-weight: normal;
  vertical-align: middle;
  text-transform: none;
`

export default {
  FONT_STYLES: {
    // First regular
    // ============================================================

    // Mini
    // -------------------------------
    FIRST_REGULAR_MN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.MN};
      line-height: ${VARIABLES.LINE_HEIGHTS.MN};
    `,

    // Tiny
    // -------------------------------
    FIRST_REGULAR_TN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.TN};
      line-height: ${VARIABLES.LINE_HEIGHTS.TN};
    `,

    // Extra extra small
    // -------------------------------
    FIRST_REGULAR_XXS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.XXS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XXS};
    `,

    // Extra small
    // -------------------------------
    FIRST_REGULAR_XS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.XS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XS};
    `,

    // Small
    // -------------------------------
    FIRST_REGULAR_SM: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.SM};
      line-height: ${VARIABLES.LINE_HEIGHTS.SM};
    `,

    // Medium
    // -------------------------------
    FIRST_REGULAR_MD: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.MD};
      line-height: ${VARIABLES.LINE_HEIGHTS.MD};
    `,

    // Large
    // -------------------------------
    FIRST_REGULAR_LG: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.LG};
      line-height: ${VARIABLES.LINE_HEIGHTS.LG};
    `,

    // First medium
    // ============================================================

    // Mini
    // -------------------------------
    FIRST_MEDIUM_MN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_MEDIUM};
      font-size: ${VARIABLES.FONT_SIZES.MN};
      line-height: ${VARIABLES.LINE_HEIGHTS.MN};
    `,

    // Tiny
    // -------------------------------
    FIRST_MEDIUM_TN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_MEDIUM};
      font-size: ${VARIABLES.FONT_SIZES.TN};
      line-height: ${VARIABLES.LINE_HEIGHTS.TN};
    `,

    // Extra extra small
    // -------------------------------
    FIRST_MEDIUM_XXS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_MEDIUM};
      font-size: ${VARIABLES.FONT_SIZES.XXS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XXS};
    `,

    // Extra small
    // -------------------------------
    FIRST_MEDIUM_XS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_MEDIUM};
      font-size: ${VARIABLES.FONT_SIZES.XS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XS};
    `,

    // Small
    // -------------------------------
    FIRST_MEDIUM_SM: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_MEDIUM};
      font-size: ${VARIABLES.FONT_SIZES.SM};
      line-height: ${VARIABLES.LINE_HEIGHTS.SM};
    `,

    // Medium
    // -------------------------------
    FIRST_MEDIUM_MD: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_MEDIUM};
      font-size: ${VARIABLES.FONT_SIZES.MD};
      line-height: ${VARIABLES.LINE_HEIGHTS.MD};
    `,

    // Large
    // -------------------------------
    FIRST_MEDIUM_LG: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_MEDIUM};
      font-size: ${VARIABLES.FONT_SIZES.LG};
      line-height: ${VARIABLES.LINE_HEIGHTS.LG};
    `,

    // First bold
    // ============================================================

    // Mini
    // -------------------------------
    FIRST_BOLD_MN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.MN};
      line-height: ${VARIABLES.LINE_HEIGHTS.MN};
    `,

    // Tiny
    // -------------------------------
    FIRST_BOLD_TN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.TN};
      line-height: ${VARIABLES.LINE_HEIGHTS.TN};
    `,

    // Extra extra small
    // -------------------------------
    FIRST_BOLD_XXS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.XXS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XXS};
    `,

    // Extra small
    // -------------------------------
    FIRST_BOLD_XS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.XS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XS};
    `,

    // Small
    // -------------------------------
    FIRST_BOLD_SM: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.SM};
      line-height: ${VARIABLES.LINE_HEIGHTS.SM};
    `,

    // Medium
    // -------------------------------
    FIRST_BOLD_MD: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.MD};
      line-height: ${VARIABLES.LINE_HEIGHTS.MD};
    `,

    // Large
    // -------------------------------
    FIRST_BOLD_LG: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.FIRST_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.LG};
      line-height: ${VARIABLES.LINE_HEIGHTS.LG};
    `,

    // Second regular
    // ============================================================

    // Mini
    // -------------------------------
    SECOND_REGULAR_MN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.MN};
      line-height: ${VARIABLES.LINE_HEIGHTS.MN};
    `,

    // Tiny
    // -------------------------------
    SECOND_REGULAR_TN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.TN};
      line-height: ${VARIABLES.LINE_HEIGHTS.TN};
    `,

    // Extra extra small
    // -------------------------------
    SECOND_REGULAR_XXS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.XXS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XXS};
    `,

    // Extra small
    // -------------------------------
    SECOND_REGULAR_XS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.XS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XS};
    `,

    // Small
    // -------------------------------
    SECOND_REGULAR_SM: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.SM};
      line-height: ${VARIABLES.LINE_HEIGHTS.SM};
    `,

    // Medium
    // -------------------------------
    SECOND_REGULAR_MD: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.MD};
      line-height: ${VARIABLES.LINE_HEIGHTS.MD};
    `,

    // Large
    // -------------------------------
    SECOND_REGULAR_LG: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_REGULAR};
      font-size: ${VARIABLES.FONT_SIZES.LG};
      line-height: ${VARIABLES.LINE_HEIGHTS.LG};
    `,

    // Second bold
    // ============================================================

    // Mini
    // -------------------------------
    SECOND_BOLD_MN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.MN};
      line-height: ${VARIABLES.LINE_HEIGHTS.MN};
    `,

    // Tiny
    // -------------------------------
    SECOND_BOLD_TN: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.TN};
      line-height: ${VARIABLES.LINE_HEIGHTS.TN};
    `,

    // Extra extra small
    // -------------------------------
    SECOND_BOLD_XXS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.XXS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XXS};
    `,

    // Extra small
    // -------------------------------
    SECOND_BOLD_XS: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.XS};
      line-height: ${VARIABLES.LINE_HEIGHTS.XS};
    `,

    // Small
    // -------------------------------
    SECOND_BOLD_SM: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.SM};
      line-height: ${VARIABLES.LINE_HEIGHTS.SM};
    `,

    // Medium
    // -------------------------------
    SECOND_BOLD_MD: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.MD};
      line-height: ${VARIABLES.LINE_HEIGHTS.MD};
    `,

    // Large
    // -------------------------------
    SECOND_BOLD_LG: css`
      ${TEXT_DEFAULT}
      font-family: ${VARIABLES.FONT_FAMILIES.SECOND_BOLD};
      font-size: ${VARIABLES.FONT_SIZES.LG};
      line-height: ${VARIABLES.LINE_HEIGHTS.LG};
    `,
  }
}
