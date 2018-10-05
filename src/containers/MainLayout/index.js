import React from 'react'
import {
  Link
} from 'react-router-dom'
import {
  Input
} from 'components'
import {
  ICONS
} from 'themes'

export class MainLayoutContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Input width='mn' leftIconSource={ICONS['']} />
        <Link to='/ui'>
          <button>Go to UI page</button>
        </Link>
      </React.Fragment>
    )
  }
}
