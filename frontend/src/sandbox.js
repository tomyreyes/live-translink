import axios from 'axios'

const result = axios({
  method: 'GET',
  url: 'https://maps.googleapis.com/maps/api/place/queryautocomplete/json',
  params: {
    key:'AIzaSyDK5cgjI7DpnkOJrbLuXUcx6FA2KPl72Jw',
    input:'Vancouver, BC'
  }
}).then(success => {
  console.log(success)
})