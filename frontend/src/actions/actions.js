import axios from 'axios'

export const CHANGE_CENTER = 'CHANGE_CENTER'

export const RECEIVE_COORDS = 'RECEIVE_COORDS'

export const changeCenter = (coordinates) => {
  console.log(coordinates)
  return { 
    type: CHANGE_CENTER,
    payload: coordinates
  }
}
