import {
  injectGlobal
} from 'styled-components'
// import {
//   default as VARIABLES
// } from 'themes/styles/bases/variables'
// import {
//   default as TYPOGRAPHYS
// } from 'themes/styles/bases/typographys'
// import {
//   default as MIXINS
// } from 'themes/styles/helpers/mixins'
// import {
//   default as PROPS
// } from 'themes/styles/helpers/props'
// import {
//   CONTENTS,
//   ICONS,
//   LOGOS,
//   SHAREDS,
//   VIDEOS,
//   AUDIOS
// } from 'themes'

// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Vendor style
// * Sample structure class
// * React slick
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

injectGlobal`
  /* Sample structure class
  ============================================================ */
  .sample-structure-class {
    /* Mixins, Props
    ------------------------------- */
    /* Parent styles
    ------------------------------- */
    /* Child element styles
    ------------------------------- */
    /* States
    ------------------------------- */
    /* Modifiers
    ------------------------------- */
    /* States with modifiers
    ------------------------------- */
    /* Media queries
    ------------------------------- */
  }

  /* React slick
  ============================================================ */
  .slick-slider {
    /* Mixins, Props
    ------------------------------- */
    /* Parent styles
    ------------------------------- */
    /* Child element styles
    ------------------------------- */
    * {
      &:focus {
        outline: 0;
      }
    }

    .slick-dots {
      li {
        width: auto;
        height: auto;
        padding-left: 3px;
        padding-right: 3px;
        margin: 0;

        button {
          width: 6px;
          height: 6px;
          padding: 0;
          border-radius: 50%;

          &:before {
            display: none;
          }
        }

        &.slick-active {
          button {
          }
        }
      }
    }

    /* States
    ------------------------------- */
    /* Modifiers
    ------------------------------- */
    /* States with modifiers
    ------------------------------- */
    /* Media queries
    ------------------------------- */
  }
`;
