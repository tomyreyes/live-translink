const CHANGE_CENTER = 'CHANGE_CENTER'

const changeCenter = (coordinates) => {
  return { 
    type: CHANGE_CENTER,
    payload: coordinates
  }
}