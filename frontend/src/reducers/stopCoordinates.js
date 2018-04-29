import { FETCH_COORDINATES } from "../actions/actions";

export const stopCoordinates = (state = [], action) => {
  switch (action.type) {
    case FETCH_COORDINATES:
      return action.payload
    default:
      return state
  }
}
