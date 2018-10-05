import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  InputWrapper
} from './styled'

class InputChildren extends React.PureComponent {
  render () {
    const {
      className,
      children
    } = this.props

    // props for css classes
    const classes = ClassNames(
      'input-children',
      className
    )

    return (
      <div className={classes}>
        {children}
      </div>
    )
  }
}

/**
 * Input description
 * - ...
 */

export class Input extends React.PureComponent {
  static defaultProps = {
    type: 'text'
  }

  static propTypes = { // TYPE > node, string, func, bool
    /**
    * [Input] - modifier name for change default multiple UI (parent and children)
    */
    ui: PropTypes.oneOf([
      'error',
      'success',
      'disabled'
    ]),

    /**
    * [Input] and [Input.Children] - additional classes
    */
    className: PropTypes.string,

    /**
    * [Input] and [Input.Children] - additional elements or text
    */
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ])
  }

  static Children = InputChildren

  render () {
    const {
      ui,
      className,
      children,
      type,
      placeholder,
      name,
      value,
      isAutocomplete,
      isAutofocus,
      isDisabled,
      maxlengthCharacter,
      minNumber,
      maxNumber,
      leftIconSource,
      leftIconClasses,
      rightIconSource,
      rightIconClasses,
      message
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const classes = ClassNames(
      'input',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-icon-left`]: leftIconSource },
      { [`is-icon-right`]: rightIconSource },
      className
    )

    return (
      <InputWrapper
        className={classes}
      >
        <div className='input-group'>
          {
            leftIconSource &&
              <a className={ClassNames(
                  'input-icon-button',
                  {leftIconClasses}
                )}
              >
                <img alt='Icon'
                  src={leftIconSource}
                />
              </a>
          }
          <input className='input-field'
            type={type}
            placeholder={placeholder}
            name={name}
            value={value}
            autoComplete={isAutocomplete}
            autoFocus={isAutofocus}
            disabled={isDisabled}
            maxLength={maxlengthCharacter}
            min={minNumber}
            max={maxNumber}
          />
          {
            rightIconSource &&
              <a className={ClassNames(
                  'input-icon-button',
                  {rightIconClasses}
                )}
              >
                <img alt='Icon'
                  src={rightIconSource}
                />
              </a>
          }
        </div>
        {
          message &&
            <div className='input-message'>
              {message}
            </div>
        }
        {children}
      </InputWrapper>
    )
  }
}
