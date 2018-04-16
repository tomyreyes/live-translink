import axios from 'axios'

export const CHANGE_CENTER = 'CHANGE_CENTER'

export const REQUEST_COORDS = 'REQUEST_COORDS'

export const RECEIVE_COORDS = 'RECEIVE_COORDS'

const changeCenter = (coordinates) => {
  return { 
    type: CHANGE_CENTER,
    payload: coordinates
  }
}

const requestCoords = () => { 
  return {
    type: REQUEST_COORDS,
    payload: searchText
  }
}

const receiveCoords = (searchText) => { //I will need to access store to get searchText 
  axios({
    method:'GET',
    
  })
  return {
    type: RECEIVE_COORDS,
    payload: response.data 
  }
}