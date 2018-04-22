export const CHANGE_CENTER = 'CHANGE_CENTER'

export const changeCenter = (coordinates) => {
  console.log(coordinates)
  return { 
    type: CHANGE_CENTER,
    payload: coordinates
  }
}
