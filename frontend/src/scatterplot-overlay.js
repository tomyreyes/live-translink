import { Component, createElement } from 'react'
import PropTypes from 'prop-types'

import Immutable from 'immutable'
/* global window */

function round(x, n) {
  const tenN = Math.pow(10, n)
  return Math.round(x * tenN) / tenN
}

const propTypes = {
  // lngLatAccessor: PropTypes.func,
  renderWhileDragging: PropTypes.bool,
  globalOpacity: PropTypes.number,
  dotRadius: PropTypes.number,
  dotFill: PropTypes.string,
  compositeOperation: PropTypes.string
}

const defaultProps = {
  // lngLatAccessor: location => [location.get(0), location.get(1)],
  renderWhileDragging: true,
  dotRadius: 4,
  dotFill: '#1FBAD6',
  globalOpacity: 1,
  // Same as browser default.
  compositeOperation: 'source-over'
}

const contextTypes = {
  viewport: PropTypes.object,
  isDragging: PropTypes.bool
}

export default class ScatterplotOverlay extends Component {
  componentDidMount() {
    this._redraw()
  }

  componentDidUpdate() {
    this._redraw()
  }

  /* eslint-disable max-statements */
  _redraw() {
    const { viewport, isDragging } = this.context
    const {
      dotRadius,
      dotFill,
      compositeOperation,
      renderWhileDragging,
      locations,
      lngLatAccessor
    } = this.props

    const pixelRatio = window.devicePixelRatio || 1
    const canvas = this.refs.overlay
    const ctx = canvas.getContext('2d')

    ctx.save()
    ctx.scale(pixelRatio, pixelRatio)
    ctx.clearRect(0, 0, viewport.width, viewport.height)
    ctx.globalCompositeOperation = compositeOperation

    if ((renderWhileDragging || !isDragging) && locations) {
      for (const location of locations) {
        const pixel = viewport.project(location)
        const pixelRounded = [round(pixel[0], 1), round(pixel[1], 1)]
        if (
          pixelRounded[0] + dotRadius >= 0 &&
          pixelRounded[0] - dotRadius < viewport.width &&
          pixelRounded[1] + dotRadius >= 0 &&
          pixelRounded[1] - dotRadius < viewport.height
        ) {
          ctx.fillStyle = dotFill
          ctx.beginPath()
          ctx.arc(pixelRounded[0], pixelRounded[1], dotRadius, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    ctx.restore()
  }
  /* eslint-enable max-statements */

  render() {
    console.log(this.context)
    const {
      viewport: { width, height }
    } = this.context
    const { globalOpacity } = this.props
    const pixelRatio = window.devicePixelRatio || 1
    return createElement('canvas', {
      ref: 'overlay',
      width: width * pixelRatio,
      height: height * pixelRatio,
      style: {
        width: `${width}px`,
        height: `${height}px`,
        position: 'absolute',
        pointerEvents: 'none',
        opacity: globalOpacity,
        left: 0,
        top: 0
      }
    })
  }
}

ScatterplotOverlay.displayName = 'ScatterplotOverlay'
ScatterplotOverlay.propTypes = propTypes
ScatterplotOverlay.defaultProps = defaultProps
ScatterplotOverlay.contextTypes = contextTypes
