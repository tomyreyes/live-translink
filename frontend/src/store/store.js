import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import getCoordinatesSaga from '../sagas/sagas'
import rootReducer from '../reducers/reducers'
const sagaMiddleware = createSagaMiddleware()

let store = createStore(rootReducer)

console.log(store.getState())


export default store
