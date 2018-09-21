import React from 'react'
import {
  Link
} from 'react-router-dom'
import {
  Example
} from 'components'

export class MainLayoutContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Main layout</h1>
        <Example a='test' b='test'>Example</Example>
        <Link to='/ui'>
          <button>Go to UI page</button>
        </Link>
      </React.Fragment>
    )
  }
}
