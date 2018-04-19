import { call, put, takeLatest} from 'redux-saga/effects'
import { RECEIVE_COORDS } from '../actions/actions'
import request from 'superagent'

const getCoordinates = (location) =>{
  const url = 'https://maps.googleapis.com/maps/api/place/queryautocomplete/json'
  return request
    .get(url)
    .query({ key: 'AIzaSyDK5cgjI7DpnkOJrbLuXUcx6FA2KPl72Jw', input: location })
    .then(results => {
      console.log(results.data)
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
     yield call(reject)
  }

     
}


function* getCoordinatesSaga() {
  yield takeLatest(RECEIVE_COORDS, callGetCoordinates);
}

export default getCoordinatesSaga;