import React,{ Component } from 'react'
import ReactMapGL from 'react-map-gl'
import { connect } from 'react-redux'

const mapBoxToken =
  'pk.eyJ1IjoidG9teTE0MyIsImEiOiJjamZ5Z3M4YjIwMXNtMzNueHVwMGd6dTloIn0.z_yPSWapeXLaixPPUcpI-A'


class Map extends Component {
  constructor() {
    super()
    this.state = { viewport: { width: 1600, height: 1000, latitude: 37.7577, longitude: -122.4376, zoom: 12 } }
  }
  

  componentDidUpdate(prevProps){
    if (prevProps !== this.props) {
      this.setState({
        viewport: {
          width: 1600,
          height: 1000,
          latitude: this.props.mapCoordinates.lat,
          longitude: this.props.mapCoordinates.lng,
          zoom: 12
        }
      })
    }
  }
  render() {
    console.log(this.props.mapCoordinates)
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapStyle = {'mapbox://styles/mapbox/streets-v9'}
        mapboxApiAccessToken={mapBoxToken}
        // onViewportChange={viewport => this.setState({ viewport })}
      />
    )
  }
}
const mapStateToProps = state => {
  return {
    mapCoordinates: state.mapCoordinates
  }
}
export default connect(mapStateToProps)(Map)