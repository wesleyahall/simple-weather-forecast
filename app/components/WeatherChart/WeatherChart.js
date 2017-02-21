import React from 'react'
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines'
import _ from 'lodash'
import './WeatherChart.styl'

class WeatherChart extends React.Component {
  average (data) {
    return _.round(_.sum(data) / data.length)
  }

  convertKtoF (kValue) {
    return 9 / 5 * (kValue - 273) + 32
  }

  render () {
    let dataAverage = this.props.isTemp ? this.convertKtoF(this.average(this.props.data)) : this.average(this.props.data)
    dataAverage = this.props.isTemp ? `${dataAverage}°F` : dataAverage
    return (
      <Sparklines className='WeatherChart' data={this.props.data}>
        <SparklinesLine color={this.props.color} />
        <SparklinesSpots />
        <SparklinesReferenceLine type={this.props.lineType} />
        <div className='DataAverage'>Average {this.props.label}: {dataAverage}</div>
      </Sparklines>
    )
  }
}

WeatherChart.propTypes = {
  color: React.PropTypes.string,
  data: React.PropTypes.array,
  lineType: React.PropTypes.string,
  isTemp: React.PropTypes.bool,
  label: React.PropTypes.string
}

export default WeatherChart
