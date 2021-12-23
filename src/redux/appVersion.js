// import { getAppUpdateInfo } from 'api/appVision'
import { createAction, createApiAction } from './creatAction'

const getAppUpdateInfo = () => {}
// type
export const INIT_STATE = {
  appVersion: { v: '1.0.0' }
}

// action

export const getLastestAppDownloadLink = createApiAction('APP_DOWNLOAD_LINK_GET', (params) =>
  getAppUpdateInfo(params)
)
export const changeVersion = createAction('CHANG_VERSION')
// reducer
export const appVersion = function (state = INIT_STATE, action) {
  switch (action.type) {
    case 'APP_DOWNLOAD_LINK_GET': {
      return { ...state, appVersion: action.payload.body }
    }
    case 'CHANG_VERSION': {
      return { ...state, appVersion: action.payload }
    }

    case 'INIT_STATE': {
      return INIT_STATE
    }
    default:
      return state
  }
}
