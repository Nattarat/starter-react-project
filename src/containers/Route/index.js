import React from 'react'
import {
  Route
} from 'react-router-dom'
import {
  MainLayoutContainer,
  UserInterfaceContainer
} from 'containers'
import {
  context
} from 'context'

export class RouteContainer extends React.Component {
  constructor(props){
    super(props)
    context.setContext({
      routeHistory: this.props.history
    })
  }

  render() {
    return (
      <React.Fragment>
        {/* Use props 'exact' for match single container(not share container) */}
        <Route exact path="/" component={MainLayoutContainer} />
        <Route exact path="/ui" component={UserInterfaceContainer} />
      </React.Fragment>
    )
  }
}