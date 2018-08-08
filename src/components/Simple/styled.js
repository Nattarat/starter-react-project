import styled from 'styled-components'
// Can't use for React Styleguidist >>> Module not found: Can't resolve 'themes'
// import {
//   VARIABLES,
//   TYPOGRAPHYS,
//   // MIXINS,
//   // UTILITIES
// } from '../../themes'

// Use relative path for React Styleguidist
import {
  default as VARIABLES
} from '../../themes/styles/bases/variables'
import {
  default as TYPOGRAPHYS
} from '../../themes/styles/bases/typographys'
// import {
//   default as MIXINS
// } from '../../themes/styles/helpers/mixins'
// import {
//   default as UTILITIES
// } from '../../themes/styles/helpers/utilities'

// Wrapper
// ============================================================
export const SimpleWrapper = styled.div`
  /* Mixins, Props
  ------------------------------- */
  /* Parent styles
  ------------------------------- */
  margin-bottom: 30px;

  /* Child element styles
  ------------------------------- */
  .simple-header,
  .simple-body,
  .simple-footer {
    padding: 15px;
    border-bottom: 1px solid ${VARIABLES.COLORS.BLACK};
  }

  .simple-header {
  }

  .simple-body {
  }

  .simple-footer {
  }

  .simple-special-message {
    ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_XXS};
    display: none;
    padding-top: 30px;
    padding-bottom: 30px;
    color: ${VARIABLES.COLORS.TEXT_DETAIL};
  }

  .simple-text-heading {
    ${TYPOGRAPHYS.FONT_STYLES.FIRST_BOLD_LG};
    color: ${VARIABLES.COLORS.TEXT_HEAD};
  }

  .simple-text-description {
    ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_MD};
    color: ${VARIABLES.COLORS.TEXT_DETAIL};
  }

  .simple-text-link {
    ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_MN};
    color: ${VARIABLES.COLORS.TEXT_LINK};
  }

  /* States
  ------------------------------- */
  &.is-error {
    background-color: ${VARIABLES.COLORS.VALIDATION_ERROR};
  }

  &.is-success {
    background-color: ${VARIABLES.COLORS.VALIDATION_SUCCESS};
  }

  &.is-special-message {
    .simple-special-message {
      display: block;
    }
  }

  /* Modifiers
  ------------------------------- */
  /* Sample using css group property > font style */
  &.is-css-group {
    ${TYPOGRAPHYS.FONT_STYLES.FONT_FIRST_REGULAR_LG};
  }

  /* Sample using separate css properties > font style  */
  &.is-css-separate {
    font-family: ${VARIABLES.FONT_FAMILIES.FIRST_REGULAR};
    font-size: ${VARIABLES.FONT_SIZES.MS};
    line-height: ${VARIABLES.LINE_HEIGHTS.MS};
  }

  /* States with modifiers
  ------------------------------- */
  /* Media queries
  ------------------------------- */
`
