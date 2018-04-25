import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'
import { connect } from 'react-redux'
import ScatterplotOverlay from '../scatterplot-overlay'

const mapBoxToken =
  'pk.eyJ1IjoidG9teTE0MyIsImEiOiJjamZ5Z3M4YjIwMXNtMzNueHVwMGd6dTloIn0.z_yPSWapeXLaixPPUcpI-A'

class Map extends Component {
  constructor() {
    super()
    this.state = {
      viewport: {
        latitude: 37.7577,
        longitude: -122.4376
      },
      locations: [[49, -123], [48, -124]]
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
      >
      <ScatterplotOverlay
      locations={this.state.locations}
      dotRadius={1}
      globalOpacity={0.8}
      compositeOperation="lighter"
      dotFill="blue"
      renderWhileDragging={true}
    />
      </ReactMapGL>
    )
  }
}

const mapStateToProps = state => {
  return {
    mapCoordinates: state.mapCoordinates
  }
}
export default connect(mapStateToProps)(Map)
