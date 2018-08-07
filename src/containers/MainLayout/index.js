import React from 'react'
import {
  Link
} from 'react-router-dom'

export class MainLayoutContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Main layout</h1>
        <Link to='/ui'>
          <button>
            <small>Go to UI page</small>
          </button>
        </Link>
      </React.Fragment>
    )
  }
}
