import React from 'react'
import {
  Route
} from 'react-router-dom'
import {
  MainLayoutContainer,
  HomeContainer,
  PageContainer
} from 'containers'
import {
  context
} from 'context'
import {
  ROUTE_PATH
} from 'helpers'

export class RouteContainer extends React.Component {
  constructor(props){
    super(props)
    context.setRedirect(this.props.history.push)
  }

  render() {
    return (
      <MainLayoutContainer>
        {/* Use props 'exact' for match single container(not share container) */}
        <Route exact path='/' component={HomeContainer} />
        <Route exact path={ROUTE_PATH.PAGE.LINK} component={PageContainer} />
      </MainLayoutContainer>
    )
  }
}
