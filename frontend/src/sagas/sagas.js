import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { CHANGE_CENTER, FETCH_COORDINATES } from '../actions/actions';
import request from 'superagent'

const key = 'S6i8bxWApJSAiWqp7Xwr'

function fetchStops(coordinates){
  const {lat, lng} = coordinates.payload
  return request
    .get('http://api.translink.ca/rttiapi/v1/stops?')
    .set('Accept', 'application/json')
    .query({ apiKey: key, lat: lat.toFixed(6), long: lng.toFixed(6), radius: 2000 }) // only accepts digits 6 past decimal 
    .then(res => {
      console.log(res)
      return res.body
    })
    .catch(error => {
      console.log(error)
    })
}

function* callFetchStops(coordinates) {
    
    const result = yield call(fetchStops, coordinates)
    let arrStops = result.map(cords => {
      let arr = []
      arr.push(cords.Longitude, cords.Latitude, 2)
      return arr
    })
    yield put({type: FETCH_COORDINATES, payload: arrStops})
}

function* mapSaga() {
  yield takeLatest(CHANGE_CENTER, callFetchStops)
}

export default mapSaga
