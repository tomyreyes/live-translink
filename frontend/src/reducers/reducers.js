import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { mapCoordinates } from './MapCoordinates'
import { stopCoordinates } from './stopCoordinates'


const rootReducer = combineReducers({
  mapCoordinates,
  stopCoordinates,
  form: formReducer
})

export default rootReducer
