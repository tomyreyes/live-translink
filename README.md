# Live-translink 
This project provides users with a live-feed of bus stops based on a specified location using Google Places Autocomplete API. I built this project for the purposes of learning Redux, as well as technologies such as React-Map-GL and Deck.GL that I was previously unfamiliar with. 

## Demo
![ezgif com-video-to-gif 1](https://user-images.githubusercontent.com/26396771/39505626-753be32e-4d88-11e8-9ecf-724428b5ce58.gif)


## Challenges
Asides from the intrinsic struggles that come along with learning a library such as Redux, I experienced some notable challenges with Translink's API. 
As many of the users of this API may know, there is a dearth of documentation in regards to it. For the purposes of my project, I was requesting bus stop locations from this API based on a specified latitude and longitude coordinates I provided it via Google AutoComplete API. The error I continued to receive while doing this was an Internal Server Error. However, when I hard-coded the example coordinates Translink's website provided, I received a response with bus stops. 
Eventually I figured out that when making requests to this API, you must provide it with a latitude and longitude coordinates that is no more or less 6 decimal places. 

## Technologies Used:

- [react-redux](https://github.com/reactjs/react-redux)
- [Redux Form](https://redux-form.com/7.3.0/)
- [redux-saga](https://redux-saga.js.org/)
- [react-map-gl](https://github.com/uber/react-map-gl)
- [Deck.gl](https://github.com/uber/deck.gl)
- [react-places-autocomplete](https://github.com/kenny-hibino/react-places-autocomplete)
- [superagent](https://github.com/visionmedia/superagent)
## Future Implementations:
- geolocation 


