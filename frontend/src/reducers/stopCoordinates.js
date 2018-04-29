import { FETCH_COORDINATES } from "../actions/actions";

export const stopCoordinates = (state = null, action) => {
  switch (action.type) {
    case FETCH_COORDINATES:
      return action.payload
    default:
      return state
  }
}
