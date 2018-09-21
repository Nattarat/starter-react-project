import React, { props } from 'react'
import ClassNames from 'classnames'

// //////////////////////////////////////////////////////////////////////////////////////////////////
// ==================================================================================================
//
// Classes
// * Text colors
//
// Using:
// ${UTILITIES.TEXT_COLOR()};
//
// ==================================================================================================
// //////////////////////////////////////////////////////////////////////////////////////////////////

const {
  a,
  b
} = this.props

const aClasses = ClassNames(a)
const bClasses = ClassNames(b)

export const PROPS = [
  a,
  b
]


export const PROPS_CLASS = [
  'aaa' + aClasses,
  'bbb' + bClasses,
]
