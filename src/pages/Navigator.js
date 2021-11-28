import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import RoutesRedirect from './RoutesRedirect'
import { Auth } from './Auth'
import { Service } from './Service'
import { App } from './App'

const Navigator = () => {
  return (
    <Router>
      {/* <RoutesRedirect> */}
        <Switch>
          <Route path="/auth/:path?" component={Auth} />
          <Route path="/service/:path?" component={Service} />
          <Route component={App} />
          <Route path="/" exact>
            <Redirect to="/auth" />
          </Route>
        </Switch>
      {/* </RoutesRedirect> */}
    </Router>
  )
}

export default Navigator
