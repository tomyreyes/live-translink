const request = require('superagent')

const key = 'S6i8bxWApJSAiWqp7Xwr'

// request
//   .get('http://api.translink.ca/rttiapi/v1/stops')
//   .set('Content-Type', 'application/json')
//   .query({ 
//     apiKey: key, 
//     lat: 49.61, 
//     long: -123.01, 
//     radius: 2000
//   })
//   .then(res => {
//     console.log(res)
//   }).catch(error => {
//     console.log(error)
//   })
  
request
  .get(
    'http://api.translink.ca/rttiapi/v1/stops?'
  )
  .set('Content-Type', 'application/json')
  .query({apiKey: key, lat: 49.187706, long: -122.850060 })
  .then(res => {
    console.log(res.text)
  })
  .catch(error => {
    console.log(error)
  })
  