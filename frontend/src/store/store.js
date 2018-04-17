import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/reducers';

let store = createStore(rootReducer, applyMiddleware(thunk))

console.log(store.getState())

export default store