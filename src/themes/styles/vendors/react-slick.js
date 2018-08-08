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
//   default as UTILITIES
// } from 'themes/styles/helpers/utilities'
// import {
//   CONTENTS,
//   ICONS,
//   LOGOS,
//   SHAREDS,
//   VIDEOS,
//   AUDIOS,
//   DOCUMENTS
// } from 'themes'

// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// React slick
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

injectGlobal`
  .react-slick {
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
  }
`;
