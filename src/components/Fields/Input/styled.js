import styled from 'styled-components'
import {
  default as VARIABLES
} from '../../../themes/styles/bases/variables'
import {
  default as TYPOGRAPHYS
} from '../../../themes/styles/bases/typographys'
import {
  default as MIXINS
} from '../../../themes/styles/helpers/mixins'
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
    flex: 1;
  }

  .input-field {
    ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_TN};
    ${MIXINS.PLACEHOLDER({})};
    transition: ${VARIABLES.TRANSITIONS.DEFAULT};
    width: 100%;
    height: ${VARIABLES.INPUT.HEIGHT};
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid ${VARIABLES.COLORS.GRAY_2};
    border-radius: ${VARIABLES.INPUT.BORDER_RADIUS};

    &:focus {
      border-color: ${VARIABLES.COLORS.GRAY_3};
      outline: 0;
    }
  }

  .input-icon-button {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${VARIABLES.INPUT_ICON_BUTTON.WIDTH};
    height: ${VARIABLES.INPUT_ICON_BUTTON.HEIGHT};

    &.is-left,
    &.is-right {
      position: absolute;
      z-index: ${VARIABLES.Z_INDEXS.LV_1};
      top: 0;
    }

    &.is-outer {
      flex: none;
    }
  }

  .input-icon-button-image {}

  .input-message {
    ${TYPOGRAPHYS.FONT_STYLES.FIRST_REGULAR_MN};
    width: 100%;
    padding-top: 3px;
  }

  /* Modifiers
  ------------------------------- */
  /* Status */
  &.is-ui-error {
    .input-field {
      border-color: ${VARIABLES.COLORS.VALIDATION_ERROR};
    }

    .input-message {
      color: ${VARIABLES.COLORS.VALIDATION_ERROR};
    }
  }

  &.is-ui-success {
    .input-field {
      border-color: ${VARIABLES.COLORS.VALIDATION_SUCCESS};
    }

    .input-message {
      color: ${VARIABLES.COLORS.VALIDATION_SUCCESS};
    }
  }

  &.is-ui-disabled {
    .input-field {
      pointer-events: none;
      background-color: ${VARIABLES.COLORS.GRAY_4};
    }

    .input-message {
      color: ${VARIABLES.COLORS.GRAY_4};
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
    .input-icon-button {
      &.is-left {
        left: 0;
      }
    }

    .input-field {
      padding-left: ${VARIABLES.INPUT.PADDINGS.ICON_BUTTON_SPACING};
    }
  }

  &.is-icon-right {
    .input-icon-button {
      &.is-right {
        right: 0;
      }
    }

    .input-field {
      padding-right: ${VARIABLES.INPUT.PADDINGS.ICON_BUTTON_SPACING};
    }
  }

  /* Media queries
  ------------------------------- */
`
