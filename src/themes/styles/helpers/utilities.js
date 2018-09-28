import {
  default as VARIABLES
} from '../bases/variables' // Use relative path for React Styleguidist

// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Utilities
// * Text colors
// * Background colors
//
// Using:
// ${UTILITIES.TEXT_COLOR()};
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

export default {
  // Text colors
  // ==================================================================================================
  TEXT_COLORS: () => {
    return `
      &.is-textcolor-black {
        color: ${VARIABLES.COLORS.BLACK};
      }

      &.is-textcolor-white {
        color: ${VARIABLES.COLORS.WHITE};
      }

      &.is-textcolor-red {
        color: ${VARIABLES.COLORS.RED};
      }

      &.is-textcolor-green {
        color: ${VARIABLES.COLORS.GREEN};
      }

      &.is-textcolor-blue {
        color: ${VARIABLES.COLORS.BLUE};
      }

      &.is-textcolor-text-head {
        color: ${VARIABLES.COLORS.TEXT_HEAD};
      }

      &.is-textcolor-text-sub-head {
        color: ${VARIABLES.COLORS.TEXT_SUB_HEAD};
      }

      &.is-textcolor-text-detail {
        color: ${VARIABLES.COLORS.TEXT_DETAIL};
      }

      &.is-textcolor-text-link {
        color: ${VARIABLES.COLORS.TEXT_LINK};
      }

      &.is-textcolor-validation-error {
        color: ${VARIABLES.COLORS.VALIDATION_ERROR};
      }

      &.is-textcolor-validation-success {
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
        background-color: ${VARIABLES.COLORS.RED};
      }

      &.is-bgcolor-green {
        background-color: ${VARIABLES.COLORS.GREEN};
      }

      &.is-bgcolor-blue {
        background-color: ${VARIABLES.COLORS.BLUE};
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
      &.is-flexalign-horizontal-start {
        justify-content: flex-start;
      }

      &.is-flexalign-horizontal-end {
        justify-content: flex-end;
      }

      &.is-flexalign-horizontal-spacebetween {
        justify-content: space-between;
      }
    `
  }
}
