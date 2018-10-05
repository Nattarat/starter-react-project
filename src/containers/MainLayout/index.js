import React from 'react'
import {
  Link
} from 'react-router-dom'
import {
  Input
} from 'components'

export class MainLayoutContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Input />
        <Link to='/ui'>
          <button>Go to UI page</button>
        </Link>
      </React.Fragment>
    )
  }
}
