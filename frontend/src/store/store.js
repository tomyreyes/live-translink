import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import mapSaga from '../sagas/sagas'
import rootReducer from '../reducers/reducers'
const sagaMiddleware = createSagaMiddleware()

let store = createStore(
  rootReducer, 
  applyMiddleware(sagaMiddleware))
  
sagaMiddleware.run(mapSaga)

console.log(store.getState())


export default store
