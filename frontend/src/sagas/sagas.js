import { call, put, takeLatest} from 'redux-saga/effects'
import { RECEIVE_COORDS } from '../actions/actions'
import request from 'superagent'

const getCoordinates = (location) =>{
  //could do autocomplete here first 
  const url = 'https://maps.googleapis.com/maps/api/place/queryautocomplete/json'
  return request
    .get(url)
    .query({ key: 'AIzaSyDK5cgjI7DpnkOJrbLuXUcx6FA2KPl72Jw', input: location })
    .then(results => {
      console.log(results.data) // i will not receive this until autocomplete sends down id 
      return results.data
    })
}

function* callGetCoordinates({location, resolve, reject}) {

  const result = yield call(getCoordinates, location)
  console.log(location, result)
  if(result) {
    yield put({type: 'RECEIVE_COORDS_DONE', result})
    yield call(resolve)
  } else {
    console.log('bad req')
     yield call(reject, {location: 'No data for location'})
  }   
}


function* getCoordinatesSaga() {
  yield takeLatest(RECEIVE_COORDS, callGetCoordinates);
}

export default getCoordinatesSaga;