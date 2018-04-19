import axios from 'axios'

export const CHANGE_CENTER = 'CHANGE_CENTER'

export const RECEIVE_COORDS = 'RECEIVE_COORDS'

const changeCenter = (coordinates) => {
  return { 
    type: CHANGE_CENTER,
    payload: coordinates
  }
}
 
export const receiveCoords = (location) => dispatch => { //dispatch react-thunk allows us to return functions with async api calls 

  let idForCoordinates
  axios({
    method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/place/queryautocomplete/json',
    params: {
      key: 'AIzaSyDK5cgjI7DpnkOJrbLuXUcx6FA2KPl72Jw', //hide this 
      input: location
    }
  }).then(result =>
    idForCoordinates = result.data.predictions[0].place_id
    
  ) //with id I will then use it to obtain coordinates. 
}