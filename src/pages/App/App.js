import { Switch, Route, Redirect } from 'react-router-dom'
import { AppLayout } from '../../components'
import Dashboard from './Dashboard/Dashboard'
import {
  RequiredActionsAll,
  RequiredActionCreate,
  RequiredActionShow
} from './Dashboard/RequiredAction'
import {
  GroupsAll,
  GroupShow,
  GroupCreate,
  GroupEdit
} from './Dashboard/Groups'
import { UsersAll, UserShow, UserCreate, UserEdit } from './Dashboard/Users'
import PATHS from '../paths'

const {
  DASHBOARD,
  USERS_ALL,
  USER_CREATE,
  USER_SHOW,
  USER_EDIT,
  REQUIRED_ACTIONS_ALL,
  REQUIRED_ACTION_CREATE,
  REQUIRED_ACTIONS_SHOW,
  GROUPS_ALL,
  GROUP_CREATE,
  GROUP_EDIT,
  GROUP_SHOW
} = PATHS.AUTHENTICATED

const routes = [
  { key: 'DASHBOARD', path: DASHBOARD, component: Dashboard, exact: true },
  { key: 'USERS_ALL', path: USERS_ALL, component: UsersAll, exact: true },
  { key: 'USER_CREATE', path: USER_CREATE, component: UserCreate, exact: true },
  { key: 'USER_EDIT', path: USER_EDIT, component: UserEdit, exact: true },
  { key: 'USER_SHOW', path: USER_SHOW, component: UserShow, exact: true },
  {
    key: 'REQUIRED_ACTIONS_ALL',
    path: REQUIRED_ACTIONS_ALL,
    component: RequiredActionsAll,
    exact: true
  },
  {
    key: 'REQUIRED_ACTION_CREATE',
    path: REQUIRED_ACTION_CREATE,
    component: RequiredActionCreate,
    exact: true
  },
  {
    key: 'REQUIRED_ACTIONS_SHOW',
    path: REQUIRED_ACTIONS_SHOW,
    component: RequiredActionShow,
    exact: true
  },
  { key: 'GROUPS_ALL', path: GROUPS_ALL, component: GroupsAll, exact: true },
  {
    key: 'GROUP_CREATE',
    path: GROUP_CREATE,
    component: GroupCreate,
    exact: true
  },
  { key: 'GROUP_EDIT', path: GROUP_EDIT, component: GroupEdit, exact: true },
  { key: 'GROUP_SHOW', path: GROUP_SHOW, component: GroupShow, exact: true }
]

const App = () => {
  return (
    <AppLayout>
      <Switch>
        {routes.map((routeProps) => (
          <Route {...routeProps} />
        ))}
        <Redirect to={PATHS.SERVICE.NOT_FOUND} />
      </Switch>
    </AppLayout>
  )
}

export default App
