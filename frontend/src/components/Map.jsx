import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'
import { connect } from 'react-redux'

const mapBoxToken =
  'pk.eyJ1IjoidG9teTE0MyIsImEiOiJjamZ5Z3M4YjIwMXNtMzNueHVwMGd6dTloIn0.z_yPSWapeXLaixPPUcpI-A'

class Map extends Component {
  constructor() {
    super()
    this.state = {
      viewport: {
        latitude: 49,
        longitude: -123
      }
    }
  }

  componentWillMount() {
    //where I will put a fetchData action
    //i could try changeCenter({lat, lng}) ??
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        viewport: {
          latitude: this.props.mapCoordinates.lat,
          longitude: this.props.mapCoordinates.lng
        }
      })
    }
  }

  render() {
    console.log(this.props.mapCoordinates)
    return (
      <ReactMapGL
        {...this.state.viewport}
        width={1000}
        height={1000}
        zoom ={13}
        mapStyle={'mapbox://styles/mapbox/streets-v9'}
        mapboxApiAccessToken={mapBoxToken}
        onViewportChange={viewport => this.setState({ viewport })}
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
