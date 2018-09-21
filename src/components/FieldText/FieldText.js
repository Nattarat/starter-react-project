import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  FieldTextWrapper
} from './styled'

/**
 * FieldText
 * - FieldText component description
 */

export class FieldText extends React.PureComponent {
  render () {
    const {
      className,
      type,
      placeholder,
      value,
      onChange
    } = this.props

    return (
      <FieldTextWrapper className={
          ClassNames(
            'fieldtext',
            className
          )
        }
      >
        <input className='fieldtext-input' type={type} placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </FieldTextWrapper>
    )
  }
}

FieldText.propTypes = { // TYPE > node, string, func, bool
  /**
   * State/Modifier classname for change default UI
  */
  className: PropTypes.oneOf([
    'is-error',
    'is-success'
  ]),
  /** Input type */
  type: PropTypes.oneOf([
    'text',
    'password'
  ]),
  /** Placeholder (Hint) */
  placeholder: PropTypes.string,
  /** Field value */
  value: PropTypes.string,
  /** Field function */
  onChange: PropTypes.func
}

FieldText.defaultProps = {
  type: 'text'
}
