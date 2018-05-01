# Live-translink 
This project provides users with a live-feed of bus stops based on a specified location using Google Places Autocomplete API. I built this project for the purposes of learning Redux, as well as technologies such as React-Map-GL and Deck.GL that I was previously unfamiliar with. 

## Challenges
Asides from the intrinsic struggles that come along with learning a library such as Redux, I experienced some notable challenges with Translink's API. 
As many of the users of this API may know, there is a dearth of documenation in regards to it. For the purposes of my project, I was requesting bus stop locations from this API based on a specified latitude and longitude coordinates I provided it via Google AutoComplete API. The error I continued to receive while doing this was an internal server error. However, when I hard-coded the example coordinates Translink's website provided, I received a response with bus stops. 
After a period of time, which I will not disclose, I figured out that when making requests to this API, you must provide it with a latitude and longitude coordinates that is no more or less 6 decimal places. 

## Technologies Used:

- [react-redux](https://github.com/reactjs/react-redux)
- [Redux Form](https://redux-form.com/7.3.0/)
- [react-map-gl](https://github.com/uber/react-map-gl)
- [Deck.gl](https://github.com/uber/deck.gl)
- [react-places-autocomplete](https://github.com/kenny-hibino/react-places-autocomplete)
- [superagent](https://github.com/visionmedia/superagent)
## Future Implementations:
- geolocation 

