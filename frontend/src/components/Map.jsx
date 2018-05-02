import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeCenter } from '../actions/actions'
import DeckGLOverlay from './DeckGLOverlay'
import { Button } from 'semantic-ui-react'
const mapBoxToken =
  'pk.eyJ1IjoidG9teTE0MyIsImEiOiJjamZ5Z3M4YjIwMXNtMzNueHVwMGd6dTloIn0.z_yPSWapeXLaixPPUcpI-A'

const MALE_COLOR = [0, 128, 255]
const FEMALE_COLOR = [255, 0, 128]


class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      viewport: {
        ...DeckGLOverlay.defaultViewport
      },
      data: this.props.stopCoordinates
    }
  }

  componentDidMount() {
    // window.addEventListener('resize', this._resize.bind(this))
    this._resize()
  }

  _resize() {
    console.log('hello')
    this._onViewportChange({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  _onViewportChange(viewport) {
    console.log(this.state.viewport)
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

  componentWillMount() {
    let lat = this.state.viewport.latitude
    let lng = this.state.viewport.longitude
    this.props.changeCenter({lat, lng})
    
  }

  componentDidUpdate(prevProps, prevState) {
    
    if (prevProps !== this.props) {
      this.setState({
        viewport: {
          latitude: this.props.mapCoordinates.lat,
          longitude: this.props.mapCoordinates.lng,
          height: 1000,
          width: 1880,
          zoom: 13
        },
        data: this.props.stopCoordinates
      })
    }
  }
  
  render() {

    const { viewport } = this.state
    console.log(viewport)
    const styles = {
         marginLeft:'860px'
    }

    return (
      <div> 
      <Button color='green' style={styles} onClick={this.searchStops.bind(this)}>Search this area</Button>
       
      <ReactMapGL
        {...viewport}
        width={1880}
        height={1000}
        zoom={13}
        mapStyle={'mapbox://styles/mapbox/streets-v9'}
        mapboxApiAccessToken={mapBoxToken}
        onViewportChange={this._onViewportChange.bind(this)}

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