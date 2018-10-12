import styled from 'styled-components'
import {
  default as VARIABLES
} from '../../../themes/styles/bases/variables'
// import {
//   default as TYPOGRAPHYS
// } from '../../../themes/styles/bases/typographys'
// import {
//   default as MIXINS
// } from '../../../themes/styles/helpers/mixins'
// import {
//   default as UTILITIES
// } from '../../../themes/styles/helpers/utilities'

// Wrapper
// ============================================================
export const SlickCarouselWrapper = styled.div`
  /* Parent styles
  ------------------------------- */
  width: 100%;
  margin-bottom: -5px; /* Fix unknown bottom spacing */

  /* Child element styles
  ------------------------------- */
  .slick-carousel-item {
    display: block;
  }

  .slick-carousel-item-image {
    width: 100%;
  }

  /* Overwrire vendor style */
  .slick-slider {
    * {
      &:focus {
        outline: 0;
      }
    }

    .slick-slide-banner {
      width: 100%;
    }

    .slick-dots {
      position: absolute;
      z-index: ${VARIABLES.Z_INDEXS.LV_1};
      right: 0;
      bottom: 10px;
      left: 0;
      display: flex !important; /* Overwrite JS inline style */
      justify-content: center;
      align-items: center;

      li {
        button {
          padding: 0 4px;
          margin: 0;
          background-color: transparent;
          border-width: 0;
          font-size: 0;

          &:before {
            content: ' ';
            transition: ${VARIABLES.TRANSITIONS.DEFAULT};
            display: block;
            width: 8px;
            height: 8px;
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
          }
        }

        &.slick-active {
          button {
            &:before {
              width: 25px;
              background-color: ${VARIABLES.COLORS.WHITE};
              border-radius: 8px;
            }
          }
        }
      }
    }
  }

  /* Modifiers
  ------------------------------- */
  /* Media queries
  ------------------------------- */
`
