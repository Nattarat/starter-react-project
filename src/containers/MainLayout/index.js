import React from 'react'
import {
  Link
} from 'react-router-dom'
import {
  Container
} from 'components'

export class MainLayoutContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Main layout</h1>
        <Container width='fluid' height='viewport-half' flexAlignItems='middle'>
          <Container.Content>
            <div style={{ width: '100px', height: '100px', backgroundColor: 'gray' }}></div>
          </Container.Content>
          <Container.Content>dasdas</Container.Content>
        </Container>
        <div className='bootstrap'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6'>col-sm-6</div>
              <div className='col-sm-6'>col-sm-6</div>
            </div>
          </div>
        </div>
        <Link to='/ui'>
          <button>Go to UI page</button>
        </Link>
      </React.Fragment>
    )
  }
}
