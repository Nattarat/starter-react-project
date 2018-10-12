import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  InputWrapper
} from './styled'

/**
 * Input description
 * - text and password field
 */

export class Input extends React.PureComponent {
  static defaultProps = {
    type: 'text',
    leftIconWidth: '18px',
    rightIconWidth: '10px',
    outerIconWidth: '14px'
  }

  static propTypes = { // TYPE > node, string, number, bool, array, object, symbol, func
    /**
    * [Input] - additional classes
    */
    className: PropTypes.string,

    /**
    * [Input] - additional elements or text
    */
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.string
    ]),

    /**
    * [Input] - modifier class for change default multiple UI (parent or children), can reuse
    */
    ui: PropTypes.oneOf([
      'error',
      'success',
      'disabled'
    ]),

    /**
    * [Input] - modifier class for change default multiple UI (parent or children), can't reuse
    */
    uiFor: PropTypes.oneOf([
      // props value
    ]),

    /**
    * [Input] - width
    *
    * - mn(mini = 75px), tn(tiny = 165px), xxs(Extra extra small = 250px), xs(Extra small = 350px), sm(Small = 500px)
    */
    width: PropTypes.oneOf([
      'mn',
      'tn',
      'xxs',
      'xs',
      'sm'
    ]),

    /**
    * [Input] - type
    */
    type: PropTypes.oneOf([
      'text',
      'password'
    ]),

    /**
    * [Input] - placeholder
    */
    placeholder: PropTypes.string,

    /**
    * [Input] - name
    */
    name: PropTypes.string,

    /**
    * [Input] - value
    */
    value: PropTypes.string,

    /**
    * [Input] - browser auto complete
    */
    isAutocomplete: PropTypes.bool,

    /**
    * [Input] - auto focus
    */
    isAutofocus: PropTypes.bool,

    /**
    * [Input] - disabled (attribute)
    */
    isDisabled: PropTypes.bool,

    /**
    * [Input] - max length character (attribute)
    */
    maxlengthCharacter: PropTypes.number,

    /**
    * [Input] - min number (attribute)
    */
    minNumber: PropTypes.number,

    /**
    * [Input] - max number (attribute)
    */
    maxNumber: PropTypes.number,

    /**
    * [Input] - left icon source, show left icon in field
    */
    leftIconSource: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string
    ]),

    /**
    * [Input] - left icon width (attribute)
    */
    leftIconWidth: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),

    /**
    * [Input] - left icon height (attribute)
    */
    leftIconHeight: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),

    /**
    * [Input] - left icon modifier class
    */
    leftIconClasses: PropTypes.string,

    /**
    * [Input] - left icon click event
    */
    onClickLeftIcon: PropTypes.func,

    /**
    * [Input] - right icon source, show right icon in field
    */
    rightIconSource: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string
    ]),

    /**
    * [Input] - right icon width (attribute)
    */
    rightIconWidth: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),

    /**
    * [Input] - right icon height (attribute)
    */
    rightIconHeight: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),

    /**
    * [Input] - right icon modifier class
    */
    rightIconClasses: PropTypes.string,

    /**
    * [Input] - right icon click event
    */
    onClickRightIcon: PropTypes.func,

    /**
    * [Input] - outer icon source, show outer icon out field
    */
    outerIconSource: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string
    ]),

    /**
    * [Input] - outer icon width (attribute)
    */
    outerIconWidth: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),

    /**
    * [Input] - outer icon height (attribute)
    */
    outerIconHeight: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),

    /**
    * [Input] - outer icon modifier class
    */
    outerIconClasses: PropTypes.string,

    /**
    * [Input] - outer icon click event
    */
    onClickOuterIcon: PropTypes.func,

    /**
    * [Input] - message under field
    */
    message: PropTypes.string,

    /**
    * [Input] - change event
    */
    onChange: PropTypes.func,

    /**
    * [Input] - focus event
    */
    onFocus: PropTypes.func,

    /**
    * [Input] - blur event
    */
    onBlur: PropTypes.func,

    /**
    * [Input] - key press event
    */
    onKeyPress: PropTypes.func
  }

  render () {
    const {
      className,
      children,
      ui,
      uiFor,
      width,
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
      leftIconWidth,
      leftIconHeight,
      leftIconClasses,
      onClickLeftIcon,
      rightIconSource,
      rightIconWidth,
      rightIconHeight,
      rightIconClasses,
      onClickRightIcon,
      outerIconSource,
      outerIconWidth,
      outerIconHeight,
      outerIconClasses,
      onClickOuterIcon,
      message,
      onChange,
      onFocus,
      onBlur,
      onKeyPress
    } = this.props

    // props for css classes
    const uiClasses = ClassNames(ui)
    const uiForClasses = ClassNames(uiFor)
    const widthClasses = ClassNames(width)
    const classes = ClassNames(
      'input',
      { [`is-ui-${uiClasses}`]: uiClasses },
      { [`is-ui-for-${uiClasses}`]: uiForClasses },
      { [`is-width-${widthClasses}`]: widthClasses },
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
                  'input-icon-button is-left',
                  {leftIconClasses}
                )}
                onClick={onClickLeftIcon}
              >
                <img className='input-icon-button-image' alt='Icon'
                  src={leftIconSource}
                  width={leftIconWidth}
                  height={leftIconHeight}
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
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyPress={onKeyPress}
          />
          {
            rightIconSource &&
              <a className={ClassNames(
                  'input-icon-button is-right',
                  {rightIconClasses}
                )}
                onClick={onClickRightIcon}
              >
                <img className='input-icon-button-image' alt='Icon'
                  src={rightIconSource}
                  width={rightIconWidth}
                  height={rightIconHeight}
                />
              </a>
          }
        </div>
        {
          outerIconSource &&
            <a className={ClassNames(
                'input-icon-button is-outer',
                {outerIconClasses}
              )}
              onClick={onClickOuterIcon}
            >
              <img className='input-icon-button-image' alt='Icon'
                src={outerIconSource}
                width={outerIconWidth}
                height={outerIconHeight}
              />
            </a>
        }
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
