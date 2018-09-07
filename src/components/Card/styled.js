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
export const CardWrapper = styled.div`
  /* Mixins, Props
  ------------------------------- */
  /* Parent styles
  ------------------------------- */
  max-width: 375px;
  padding: 10px;
  border: 1px solid #CCCCCC;

  /* Child element styles
  ------------------------------- */
  /* Body */
  .card-body {
    display: flex;
    margin-bottom: 8px;
  }

  /* Avatar */
  .card-avatar {
    overflow: hidden;
    position: relative;
    flex: none;
    width: 70px;
    height: 70px;
    border-radius: 50%;

    .card-avatar-image {
      object-fit: cover;
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  /* Info */
  .card-info {
    flex: 1;
    padding-left: 15px;
    padding-right: 15px;

    .card-info-heading {
      margin-bottom: 8px;
      font-size: 18px;
      font-weight: bold;
    }

    .card-info-list {}

    .card-info-list-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 5px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .card-info-icon {
      flex: none;
      display: inline-block;
      width: 20px;
      height: auto;
      margin-right: 10px;
      vertical-align: middle;

      &.is-star {
        position: relative;
        top: -4px;
      }
    }

    .card-info-detail {
      display: inline-block;
      vertical-align: middle;
      font-size: 12px;
    }
  }

  /* Contact */
  .card-contact {
    flex: none;
    display: flex;
    align-items: center;
    align-self: flex-end;

    .card-contact-button {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 46px;
      height: 46px;
      margin-right: 5px;
      background-color: #3579B7;
      border-radius: 50%;

      &:last-child {
        margin-right: 0;
      }
    }

    .card-contact-button-icon {
      &.is-phone {
        width: auto;
        height: 20px;
      }

      &.is-chat {
        width: 20px;
        height: auto;
      }
    }

    .card-contact-badge {
      position: absolute;
      z-index: 1;
      bottom: -5px;
      right: -5px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 22px;
      height: 22px;
      background-color: #F58B50;
      border-radius: 50%;
    }

    .card-contact-badge-number {
      font-size: 12px;
      color: #FFFFFF;
    }
  }

  .card-footer {
    display: flex;
    align-items: center;

    .card-footer-label {
      display: inline-block;
      font-weight: bold;
      margin-right: 5px;
      font-size: 12px;
      vertical-align: middle;
    }

    .card-footer-message {
      font-size: 12px;
    }
  }

  /* States
  ------------------------------- */
  /* Modifiers
  ------------------------------- */
  &.is-error {
    background-color: #FEB8B8;

    .card-contact {
      .card-contact-button {
        background-color: #DC5959;
      }
    }
  }

  &.is-success {
    background-color: #CEEFC1;

    .card-contact {
      .card-contact-button {
        background-color: #78C558;
      }
    }
  }

  /* States with modifiers
  ------------------------------- */
  /* Media queries
  ------------------------------- */
`
