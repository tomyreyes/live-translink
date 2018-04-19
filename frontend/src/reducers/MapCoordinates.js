import { RECEIVE_COORDS } from "../actions/actions";


const initialState = {
  latitude: 49.287,
  longitude: -123.1207,
  searchText: ''
}
export const mapCoordinates = (state = initialState, action) => {
  switch (action) {
    case RECEIVE_COORDS: 
    return {
      ...state,
      searchText: action.payload 
    } 
  default: 
    return state
  }
}



 