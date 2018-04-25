import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { CHANGE_CENTER } from '../actions/actions';
import request from 'superagent'

const key = 'S6i8bxWApJSAiWqp7Xwr'

function fetchStops(coordinates){
  const {lat, lng} = coordinates.payload
  console.log(lat.toFixed(6), lng.toFixed(6))

  return request
    .get('http://api.translink.ca/rttiapi/v1/stops?')
    .set('Accept', 'application/json')
    .query({ apiKey: key, lat: lat.toFixed(6), long: lng.toFixed(6) }) // only accepts digits 6 past decimal 
    .then(res => {
      console.log(res)
      return res.body
    })
    .catch(error => {
      console.log(error)
    })
}

function* callFetchStops(coordinates) {
  console.log('hello')
    const result = yield call(fetchStops, coordinates)
    let tomy = result.map(cord => {
      
    })

}


function* mapSaga() {
  yield takeLatest(CHANGE_CENTER, callFetchStops)
}

export default mapSaga
