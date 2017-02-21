import React from 'react'
import { connect } from 'react-redux'
import WeatherChart from '../../components/WeatherChart'
import GoogleMap from '../../components/GoogleMap'
import './WeatherList.styl'

class WeatherList extends React.Component {

  convertKtoF (kValue) {
    return 9 / 5 * (kValue - 273) + 32
  }

  renderWeather (cityData) {
    const cityName = cityData.city.name
    const temps = cityData.list.map(weather => this.convertKtoF(weather.main.temp))
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const {lon, lat} = cityData.city.coord

    let key = `${cityName}-${Date.now()}`

    return (
      <tr className='WeatherList__Row' key={key}>
        <td vertical-align='middle' display='table-cell'>
          <GoogleMap className='GoogleMap' lng={lon} lat={lat} />
        </td>
        <td>
          <WeatherChart
            className='WeatherChart'
            color='red'
            data={temps}
            lineType='avg'
            label='Temp'
            units='°F'
            isTemp
          />
        </td>
        <td>
          <WeatherChart
            className='WeatherChart'
            color='blue'
            data={pressures}
            lineType='avg'
            label='Pressure'
            units='hPA'
          />
        </td>
        <td>
          <WeatherChart
            className='WeatherChart'
            color='green'
            data={humidities}
            lineType='avg'
            label='Humidity'
            units='%'
          />
        </td>
      </tr>
    )
  }

  render () {
    return (
      <table className='WeatherList table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(::this.renderWeather) }
        </tbody>
      </table>
    )
  }
}

WeatherList.propTypes = {
  weather: React.PropTypes.any
}

function mapStateToProps ({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
