import styled from 'styled-components'
// import {
//   default as VARIABLES
// } from '../../themes/styles/bases/variables'
// import {
//   default as TYPOGRAPHYS
// } from '../../themes/styles/bases/typographys'
// import {
//   default as MIXINS
// } from '../../themes/styles/helpers/mixins'
// import {
//   default as UTILITIES
// } from '../../themes/styles/helpers/utilities'

// Wrapper
// ============================================================
export const FieldTextWrapper = styled.div`
  /* Mixins, Props
  ------------------------------- */
  /* Parent styles
  ------------------------------- */
  /* Child element styles
  ------------------------------- */
  .fieldtext-input {
    padding: 5px 10px;
    border: 1px solid gray;
  }

  /* States
  ------------------------------- */
  &.is-error {
    .fieldtext-input {
      border: 1px solid red;
    }
  }

  &.is-success {
    .fieldtext-input {
      border: 1px solid green;
    }
  }

  /* Modifiers
  ------------------------------- */
  /* States with modifiers
  ------------------------------- */
  /* Media queries
  ------------------------------- */
`
