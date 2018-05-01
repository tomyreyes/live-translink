import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeCenter } from '../actions/actions'
import DeckGLOverlay from './DeckGLOverlay'
const mapBoxToken =
  'pk.eyJ1IjoidG9teTE0MyIsImEiOiJjamZ5Z3M4YjIwMXNtMzNueHVwMGd6dTloIn0.z_yPSWapeXLaixPPUcpI-A'

const MALE_COLOR = [0, 128, 255]
const FEMALE_COLOR = [255, 0, 128]


class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        ...DeckGLOverlay.defaultViewport, transitionDuration:3000
      },
      data: this.props.stopCoordinates
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize.bind(this))
    this._resize()
  }

  _resize() {
    this._onViewportChange({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  _onViewportChange(viewport) {
      this.setState({
      viewport: { ...this.state.viewport, ...viewport },
      data: this.props.stopCoordinates
    })
    }
  searchStops() {

    let lat = this.state.viewport.latitude
    let lng = this.state.viewport.longitude
    this.props.changeCenter({ lat, lng })
  }

  componentWillMount() { // this is where I will call using geolocation coords ?
    let lat = this.state.viewport.latitude
    let lng = this.state.viewport.longitude
    this.props.changeCenter({lat, lng})
    data: this.state.data
  }

  componentDidUpdate(prevProps, prevState) {
    
    if (prevProps !== this.props) {
      this.setState({
        viewport: {
          latitude: this.props.mapCoordinates.lat,
          longitude: this.props.mapCoordinates.lng
        },
        data: this.props.stopCoordinates,
      })
    }
  }
  
  render() {

    const { viewport } = this.state
    const styles = {
      reactMapGl: {
      marginLeft:'70px'
      },
      button:{
         marginLeft:'883px'
      }

    }

    return (
  
      <div> 
      <button style={styles.button} onClick={this.searchStops.bind(this)}>Search this area</button>
       
      <ReactMapGL
        {...viewport}
        width={1600}
        height={1000}
        zoom={13}
        mapStyle={'mapbox://styles/mapbox/streets-v9'}
        mapboxApiAccessToken={mapBoxToken}
        onViewportChange={this._onViewportChange.bind(this)}
        style={styles.reactMapGl}
      >

        <DeckGLOverlay
          viewport={viewport}
          data={this.state.data}
          maleColor={MALE_COLOR}
          femaleColor={FEMALE_COLOR}
          radius={30}
        />

      </ReactMapGL>
      </div>

      
    )
  }
}

const mapStateToProps = state => {
  return {
    mapCoordinates: state.mapCoordinates,
    stopCoordinates: state.stopCoordinates
  }
}

const mapDispatchToProps = (dispatch) => {

  return bindActionCreators({
    changeCenter: changeCenter
  }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Map)