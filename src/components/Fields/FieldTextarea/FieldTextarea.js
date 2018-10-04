import React from 'react'
import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import {
  FieldTextareaWrapper
} from './styled'

/**
 * FieldTextarea
 * - FieldTextarea component description
 */

export class FieldTextarea extends React.PureComponent {
  render () {
    const {
      className,
      placeholder,
      value,
      onChange
    } = this.props

    return (
      <FieldTextareaWrapper className={
          ClassNames(
            'fieldtextarea',
            className
          )
        }
      >
        <textarea className='fieldtextarea-input' placeholder={placeholder}
          value={value}
          onChange={onChange}
        >
        </textarea>
      </FieldTextareaWrapper>
    )
  }
}

FieldTextarea.propTypes = { // TYPE > node, string, func, bool
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

FieldTextarea.defaultProps = {
  type: 'text'
}
