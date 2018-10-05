import styled from 'styled-components'
import {
  default as VARIABLES
} from '../../../themes/styles/bases/variables'
import {
  default as TYPOGRAPHYS
} from '../../../themes/styles/bases/typographys'
// import {
//   default as MIXINS
// } from '../../../themes/styles/helpers/mixins'
// import {
//   default as UTILITIES
// } from '../../../themes/styles/helpers/utilities'

// Wrapper
// ============================================================
export const InputWrapper = styled.div`
  /* Parent styles
  ------------------------------- */
  display: flex;
  flex-wrap: wrap;

  /* Child element styles
  ------------------------------- */
  .input-group {
    position: relative;
  }

  .input-field {
    ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_TN};
    transition: ${VARIABLES.TRANSITIONS.DEFAULT};
    width: 100%;
    height: ${VARIABLES.INPUT.HEIGHT};
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid ${VARIABLES.COLORS.GRAY_2};
    border-radius: ${VARIABLES.BORDER_RADIUSES.MN};

    &:focus {
      border-color: ${VARIABLES.COLORS.GRAY_3};
      outline: 0;
    }
  }

  .input-icon-button {
    position: absolute;
    z-index: ${VARIABLES.Z_INDEXS.LV_1};
    display: block;
  }

  .input-message {
    width: 100%;
  }

  /* Modifiers for multiple UI
  ------------------------------- */
  /* Status */
  &.is-ui-error {
    .input-field {
      border-color: ${VARIABLES.COLORS.VALIDATION_ERROR};
    }
  }

  &.is-ui-success {
    .input-field {
      border-color: ${VARIABLES.COLORS.VALIDATION_SUCCESS};
    }
  }

  &.is-ui-disabled {
    .input-field {
      pointer-events: none;
      background-color: ${VARIABLES.COLORS.GRAY_4};
    }
  }

  /* Width */
  &.is-width-mn {
    width: 100%;
    max-width: ${VARIABLES.INPUT.WIDTH.MN};
  }

  &.is-width-tn {
    width: 100%;
    max-width: ${VARIABLES.INPUT.WIDTH.TN};
  }

  &.is-width-xxs {
    width: 100%;
    max-width: ${VARIABLES.INPUT.WIDTH.XXS};
  }

  &.is-width-xs {
    width: 100%;
    max-width: ${VARIABLES.INPUT.WIDTH.XS};
  }

  &.is-width-sm {
    width: 100%;
    max-width: ${VARIABLES.INPUT.WIDTH.SM};
  }

  /* Icon */
  &.is-icon-left {
    .input-field {
      padding-left: 45px;
    }
  }

  &.is-icon-right {
    .input-field {
      padding-right: 45px;
    }
  }

  /* Modifiers for single UI
  ------------------------------- */
  /* Media queries
  ------------------------------- */
`
