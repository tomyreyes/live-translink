const request = require('superagent')

const key = 'S6i8bxWApJSAiWqp7Xwr'

let results = 
  request
  .get(
    'http://api.translink.ca/rttiapi/v1/stops?'
  )
  .set('Content-Type', 'application/json')
  .query({apiKey: key, lat: 49.187706, long: -122.850060, radius: 500 })
  .then(res => {
    console.log(res.body)
  })
  .catch(error => {
    console.log(error)
  })
  
  // I can iterate through this using forEach and push coordinates of each bus stop to an array 
  //this array will be sent as payload to store 
  //from this I can mapStateToProps -> coordinatesArr.map -> show results on map 

  