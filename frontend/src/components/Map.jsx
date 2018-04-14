import React,{ Component } from 'react'
import ReactMapGL from 'react-map-gl'

const mapBoxToken =
  'pk.eyJ1IjoidG9teTE0MyIsImEiOiJjamZ5Z3M4YjIwMXNtMzNueHVwMGd6dTloIn0.z_yPSWapeXLaixPPUcpI-A'


class Map extends Component {
  state = {
    viewport: {
      width: 1600,
      height: 1000,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 12
    }
  }

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapStyle = {'mapbox://styles/mapbox/streets-v9'}
        mapboxApiAccessToken={mapBoxToken}
        onViewportChange={viewport => this.setState({ viewport })}
      />
    )
  }
}
export default Map