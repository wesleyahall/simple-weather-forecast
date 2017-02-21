import React from 'react'
import { connect } from 'react-redux'
import WeatherChart from '../../components/WeatherChart'
import './WeatherList.styl'

class WeatherList extends React.Component {

  renderWeather (cityData) {
    const cityName = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    let key = `${cityName}-${Date.now()}`

    return (
      <tr className='WeatherList__Row' key={key}>
        <td vertical-align='middle' display='table-cell' width={120}>{cityName}</td>
        <td width={230}>
          <WeatherChart
            className='WeatherChart'
            color='red'
            data={temps}
            lineType='median'
            isTemp
            label='Temperature'
          />
        </td>
        <td width={230}>
          <WeatherChart
            className='WeatherChart'
            color='blue'
            data={pressures}
            lineType='median'
            label='Pressure'
          />
        </td>
        <td width={230}>
          <WeatherChart
            className='WeatherChart'
            color='green'
            data={humidities}
            lineType='median'
            label='Humidity'
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
