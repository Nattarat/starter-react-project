import React from 'react'
import {
  Link
} from 'react-router-dom'
import {
  Card
} from 'components'
import {
  CONTENTS
} from 'themes'

export class MainLayoutContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Main layout</h1>
        <Card
          avatarsSource={CONTENTS['avatar-1.jpg']}
          name='Nattarat Srila'
          rating='5.0'
          country='Thailand'
          chatMessageNumber='99'
          footerMessage='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
        />
        <Link to='/ui'>
          <button>
            <small>Go to UI page</small>
          </button>
        </Link>
      </React.Fragment>
    )
  }
}
