import styled from 'styled-components'
import {
  default as VARIABLES
} from '../../themes/styles/bases/variables'
// import {
//   default as TYPOGRAPHYS
// } from '../../themes/styles/bases/typographys'
// import {
//   default as MIXINS
// } from '../../themes/styles/helpers/mixins'
import {
  default as UTILITIES
} from '../../themes/styles/helpers/utilities'

// Wrapper
// ============================================================
export const ContainerWrapper = styled.div`
  /* Parent styles
  ------------------------------- */
  display: flex;
  width: 100%;
  max-width: ${VARIABLES.BREAKPOINTS.LAPTOP_MD};
  margin-left: auto;
  margin-right: auto;

  /* Child element styles
  ------------------------------- */
  /* Modifiers
  ------------------------------- */
  /* Flex align */
  ${UTILITIES.FLEX_ALIGNS()};
  ${UTILITIES.FLEX_ALIGN_ITEMS()};

  /* Width */
  &.is-width-fluid {
    max-width: 100%;
  }

  /* Height */
  &.is-height-fluid {
    height: 100%;
  }

  &.is-height-viewport {
    height: 100vh;
  }

  &.is-height-viewport-half {
    height: 50vh;
  }

  /* Padding */
  &.is-padding-content {
    padding-left: 30px;
    padding-right: 30px;
  }

  &.is-padding-content-mobile {
    @media (max-width: ${VARIABLES.BREAKPOINTS.MOBILE_LG_MAX}) {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  &.is-padding-content-phablet {
    @media (min-width: ${VARIABLES.BREAKPOINTS.PHABLET_XS}) and (max-width: ${VARIABLES.BREAKPOINTS.PHABLET_LG_MAX}) {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  &.is-padding-content-tablet {
    @media (min-width: ${VARIABLES.BREAKPOINTS.TABLET_XS}) and (max-width: ${VARIABLES.BREAKPOINTS.TABLET_LG_MAX}) {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  &.is-padding-content-mobile-phablet {
    @media (max-width: ${VARIABLES.BREAKPOINTS.PHABLET_LG_MAX}) {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  &.is-padding-content-mobile-tablet {
    @media (max-width: ${VARIABLES.BREAKPOINTS.TABLET_LG_MAX}) {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  /* Media queries
  ------------------------------- */
`
