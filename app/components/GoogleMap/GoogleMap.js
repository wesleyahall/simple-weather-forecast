/* global google */
import React from 'react'
import './GoogleMap.styl'

class GoogleMap extends React.Component {
  componentDidMount () {
    new google.maps.Map(this.refs.map, {   // eslint-disable no-new
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    })
  }
  render () {
    return <div className='GoogleMap'><div ref='map' /></div>
  }
}

GoogleMap.propTypes = {
  lat: React.PropTypes.number.isRequired,
  lng: React.PropTypes.number.isRequired
}

export default GoogleMap
