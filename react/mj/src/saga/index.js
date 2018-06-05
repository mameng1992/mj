import { takeEvery } from 'redux-saga'
import {
    LOGIN_COMMIT,
    CHANGE_CODE,
    SAGA_GET_ROUTES,
    LOGIN_OUT,
    SAGA_CHECK_NAME,
} from 'actionTypes'
import { login, changeCode, loginOut, checkName } from './login'
import { getRoutes } from './auth'


export default function* () {

    yield [
        takeEvery(LOGIN_COMMIT, login),
        takeEvery(CHANGE_CODE, changeCode),
        takeEvery(SAGA_GET_ROUTES, getRoutes),
        takeEvery(LOGIN_OUT, loginOut),
        takeEvery(SAGA_CHECK_NAME, checkName),
    ]
}