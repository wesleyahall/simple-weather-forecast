import React from 'react'
import { connect } from 'react-redux'

class WeatherList extends React.Component {

  renderWeather (cityData) {
    const cityName = cityData.city.name
    return (
      <tr>
        <td>{cityName}</td>
        <td>{cityData.main.temp}</td>
        <td>{cityData.main.pressure}</td>
        <td>{cityData.main.humidity}</td>
      </tr>
    )
  }

  render () {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    )
  }
}

WeatherList.propTypes = {
  weather: React.PropTypes.any
}

function mapStateToProps ({ weather }) {
  return ({ weather })
}

export default connect(mapStateToProps)(WeatherList)
