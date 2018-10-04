import styled from 'styled-components'
import {
  default as VARIABLES
} from '../../themes/styles/bases/variables'
import {
  default as TYPOGRAPHYS
} from '../../themes/styles/bases/typographys'
import {
  default as MIXINS
} from '../../themes/styles/helpers/mixins'
import {
  default as UTILITIES
} from '../../themes/styles/helpers/utilities'

// Wrapper
// ============================================================
export const ExampleWrapper = styled.div`
  /* Parent styles
  ------------------------------- */
  display: flex;
  align-items: center;
  padding: 15px 30px;
  background-color: ${VARIABLES.COLORS.GRAY_1};

  /* Child element styles
  ------------------------------- */
  .example-icon {
    margin-right: 15px;
  }

  .example-children {
    ${UTILITIES.FONT_COLORS()};
    ${UTILITIES.BACKGROUND_COLORS()};
    ${MIXINS.ELLIPSIS({})};
    ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_XS};
    color: ${VARIABLES.COLORS.BLACK};
  }

  /* Modifiers for multiple UI
  ------------------------------- */
  &.is-ui-error,
  &.is-ui-success {
    .example-children {
      color: ${VARIABLES.COLORS.WHITE};
    }
  }

  &.is-ui-error {
    background-color: ${VARIABLES.COLORS.RED_1};
  }

  &.is-ui-success {
    background-color: ${VARIABLES.COLORS.GREEN_1};
  }

  /* Modifiers for single UI
  ------------------------------- */
  ${UTILITIES.FLEX_ALIGNS()};

  /* For overwrite style from modifiers */
  &[class*='is'] {
    .example-children {
      ${UTILITIES.FONT_COLORS()};
    }
  }

  /* Media queries
  ------------------------------- */
`
