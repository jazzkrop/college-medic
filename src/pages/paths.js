const PATHS = {
  CONFIG: {
    DEFAULT: '/auth',
    AFTER_LOGIN: '/dashboard',
    AFTER_LOGOUT: '/auth'
  },
  UNAUTHENTICATED: {
    LOGIN: '/auth',
    SIGNUP: '/auth/signup',
    FORGOT_PASSWORD: '/auth/forgot-password'
  },
  SERVICE: {
    ACCESS_DENIED: '/service/access-denied',
    GDPR: '/service/gdpr',
    NOT_FOUND: '/service/404',
    TERMS_AND_CONDITIONS: '/service/terms-and-conditions'
  },
  AUTHENTICATED: {
    DASHBOARD: '/dashboard',
    USERS_ALL: '/users',
    USER_CREATE: '/user/create',
    USER_SHOW: '/users/:id',
    USER_EDIT: '/users/:id/edit',
    REQUIRED_ACTIONS_ALL: '/required-actions',
    REQUIRED_ACTION_CREATE: '/required-action/create',
    REQUIRED_ACTIONS_SHOW: '/required-actions/:id',
    REQUIRED_ACTION_EDIT: '/required-actions/:id/edit',
    GROUPS_ALL: '/groups',
    GROUP_CREATE: '/group/create',
    GROUP_SHOW: '/groups/:id',
    GROUP_EDIT: '/groups/:id/edit',
    SETTINGS: '/settings',
    APPEARANCE: '/settings/appearance',
    LANGUAGES: '/settings/languages',
    STORAGE: '/settings/storage'
  }
}

export default PATHS
