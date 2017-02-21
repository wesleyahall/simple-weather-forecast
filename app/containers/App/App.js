import React from 'react'
import SearchBar from '../SearchBar'
import WeatherList from '../WeatherList'

import '../../assets/lib/bootstrap.min.css'
import './App.styl'

class App extends React.Component {
  componentDidMount () {
    const script = document.createElement('script')
    const API = require('../../auth/googlemapsapi.json')
    const API_KEY = API.key

    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`
    script.async = true
    script.defer = true
    script.type = 'text/javascript'
    document.body.appendChild(script)
  }

  render () {
    const { children } = this.props
    return (
      <div className='AppContainer'>
        <main>
          <h1 className='MainTitle'>
            Simple Weather Forecast
          </h1>
          <SearchBar />
          <WeatherList />
          {children}
        </main>
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.node
}

export default App
