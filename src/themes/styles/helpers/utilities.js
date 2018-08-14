import {
  default as VARIABLES
} from 'themes/styles/bases/variables'

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
      &.is-color-black {
        color: ${VARIABLES.COLORS.BLACK};
      }

      &.is-color-white {
        color: ${VARIABLES.COLORS.WHITE};
      }

      &.is-color-red {
        color: ${VARIABLES.COLORS.RED};
      }

      &.is-color-green {
        color: ${VARIABLES.COLORS.GREEN};
      }

      &.is-color-blue {
        color: ${VARIABLES.COLORS.BLUE};
      }

      &.is-color-text-head {
        color: ${VARIABLES.COLORS.TEXT_HEAD};
      }

      &.is-color-text-sub-head {
        color: ${VARIABLES.COLORS.TEXT_SUB_HEAD};
      }

      &.is-color-text-detail {
        color: ${VARIABLES.COLORS.TEXT_DETAIL};
      }

      &.is-color-text-link {
        color: ${VARIABLES.COLORS.TEXT_LINK};
      }

      &.is-color-validation-error {
        color: ${VARIABLES.COLORS.VALIDATION_ERROR};
      }

      &.is-color-validation-success {
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
  }
}
