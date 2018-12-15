export const CHANGE_CENTER = 'CHANGE_CENTER'
export const FETCH_COORDINATES = 'FETCH_COORDINATES'

export const changeCenter = (coordinates) => {
  return { 
    type: CHANGE_CENTER,
    payload: coordinates
  }
}

export const fetchCoordinates = (arrStops) => {
  return {
    type: FETCH_COORDINATES,
    payload: arrStops
  }
}



