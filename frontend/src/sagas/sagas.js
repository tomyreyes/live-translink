import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { CHANGE_CENTER } from '../actions/actions';
import request from 'superagent'

const key = 'S6i8bxWApJSAiWqp7Xwr'

function fetchStops(coordinates){
  const {lat, lng} = coordinates.payload
  console.log(lat)

  return (
    request
      .get(`http://api.translink.ca/rttiapi/v1/stops?apikey=${key}`)
      .set('Accept', 'application/json')
      .query({ lat: lat, long: lng, radius: 500 })
      .then(res => {
        console.log(res)
        return res
      })
      .catch(error => {
        console.log(error)
      })
  )
}

function* callFetchStops(coordinates) {
  console.log('hello')
    const result = yield call(fetchStops, coordinates)
    console.log(result) 
}


function* mapSaga() {
  yield takeLatest(CHANGE_CENTER, callFetchStops)
}

export default mapSaga
