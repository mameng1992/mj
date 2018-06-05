import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutable'
import Immutable from 'immutable'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'sagas'
import login from './login'
import auth from './auth'
import home from './home'
import button from './button'


const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
    login,
    auth,
    home,
    button,
})

const store = createStore(
    rootReducer,
    Immutable.Map(),
    applyMiddleware(sagaMiddleware),
)
sagaMiddleware.run(rootSaga)


export default store

