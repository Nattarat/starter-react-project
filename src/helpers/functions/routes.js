import {
  context
} from 'context'

export const redirect = (path) => {
  const {
    routeHistory
  } = context.state
  routeHistory.push(path)
}