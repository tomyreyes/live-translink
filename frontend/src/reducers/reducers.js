import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { mapCoordinates } from './MapCoordinates'

const rootReducer = combineReducers({
  mapCoordinates,
  form: formReducer
})

export default rootReducer 
