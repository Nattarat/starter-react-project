import {
  default as VARIABLES
} from '../bases/variables' // Use relative path for React Styleguidist

// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Utilities
//
// * Text / Background colors
//   > black, white, red, green, blue
//   > text-head, text-sub-head, text-detail, text-link
//   > validation-error, validation-success
//
// * Flex aligns
//   > left, right, center, spacebetween, top, bottom, middle, spacebetween-vertical
//
// * Flex vertical aligns
//   > top, bottom, middle
//
// Using:
// ${UTILITIES.FONT_COLORS()};
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

export default {
  // Text colors
  // ==================================================================================================
  FONT_COLORS: () => {
    return `
      &.is-fontcolor-black {
        color: ${VARIABLES.COLORS.BLACK};
      }

      &.is-fontcolor-white {
        color: ${VARIABLES.COLORS.WHITE};
      }

      &.is-fontcolor-red {
        color: ${VARIABLES.COLORS.RED_1};
      }

      &.is-fontcolor-green {
        color: ${VARIABLES.COLORS.GREEN_1};
      }

      &.is-fontcolor-blue {
        color: ${VARIABLES.COLORS.BLUE_1};
      }

      &.is-fontcolor-text-head {
        color: ${VARIABLES.COLORS.TEXT_HEAD};
      }

      &.is-fontcolor-text-sub-head {
        color: ${VARIABLES.COLORS.TEXT_SUB_HEAD};
      }

      &.is-fontcolor-text-detail {
        color: ${VARIABLES.COLORS.TEXT_DETAIL};
      }

      &.is-fontcolor-text-link {
        color: ${VARIABLES.COLORS.TEXT_LINK};
      }

      &.is-fontcolor-validation-error {
        color: ${VARIABLES.COLORS.VALIDATION_ERROR};
      }

      &.is-fontcolor-validation-success {
        color: ${VARIABLES.COLORS.VALIDATION_SUCCESS};
      }
    `
  },

  // Background colors
  // ==================================================================================================
  BACKGROUND_COLORS: () => {
    return `
      &.is-bgcolor-black {
        background-color: ${VARIABLES.COLORS.BLACK};
      }

      &.is-bgcolor-white {
        background-color: ${VARIABLES.COLORS.WHITE};
      }

      &.is-bgcolor-red {
        background-color: ${VARIABLES.COLORS.RED_1};
      }

      &.is-bgcolor-green {
        background-color: ${VARIABLES.COLORS.GREEN_1};
      }

      &.is-bgcolor-blue {
        background-color: ${VARIABLES.COLORS.BLUE_1};
      }

      &.is-bgcolor-text-head {
        background-color: ${VARIABLES.COLORS.TEXT_HEAD};
      }

      &.is-bgcolor-text-sub-head {
        background-color: ${VARIABLES.COLORS.TEXT_SUB_HEAD};
      }

      &.is-bgcolor-text-detail {
        background-color: ${VARIABLES.COLORS.TEXT_DETAIL};
      }

      &.is-bgcolor-text-link {
        background-color: ${VARIABLES.COLORS.TEXT_LINK};
      }

      &.is-bgcolor-validation-error {
        background-color: ${VARIABLES.COLORS.VALIDATION_ERROR};
      }

      &.is-bgcolor-validation-success {
        background-color: ${VARIABLES.COLORS.VALIDATION_SUCCESS};
      }
    `
  },

  // Flex aligns
  // ==================================================================================================
  FLEX_ALIGNS: () => {
    return `
      &.is-flexalign-left {
        justify-content: flex-start;
      }
      &.is-flexalign-right {
        justify-content: flex-end;
      }
      &.is-flexalign-center {
        justify-content: center;
      }
      &.is-flexalign-spacebetween {
        justify-content: space-between;
      }

      &.is-flexalign-top {
        flex-direction: column;
        justify-content: flex-start;
      }
      &.is-flexalign-bottom {
        flex-direction: column;
        justify-content: flex-end;
      }
      &.is-flexalign-middle {
        flex-direction: column;
        justify-content: center;
      }
      &.is-flexalign-spacebetween-vertical {
        flex-direction: column;
        justify-content: space-between;
      }
    `
  },

  // Flex vertical aligns
  // ==================================================================================================
  FLEX_ALIGN_ITEMS: () => {
    return `
      &.is-flexalign-vertical-top {
        align-items: flex-start;
      }
      &.is-flexalign-vertical-bottom {
        align-items: flex-end;
      }
      &.is-flexalign-vertical-middle {
        align-items: center;
      }
    `
  }
}
