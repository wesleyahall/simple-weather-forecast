import React from 'react'
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines'
import _ from 'lodash'
import './WeatherChart.styl'

class WeatherChart extends React.Component {
  average (data) {
    return _.round(_.sum(data) / data.length)
  }

  getMax (data) {
    return _.round(Math.max.apply(null, data))
  }

  getMin (data) {
    return _.round(Math.min.apply(null, data))
  }

  render () {
    let dataAverage = this.average(this.props.data)
    let dataMax = this.getMax(this.props.data)
    let dataMin = this.getMin(this.props.data)

    return (
      <Sparklines className='WeatherChart' data={this.props.data}>
        <SparklinesLine color={this.props.color} />
        <SparklinesSpots />
        <SparklinesReferenceLine type={this.props.lineType} />
        <div className='DataAverage'><strong>Average {this.props.label}</strong>: {dataAverage} {this.props.units}</div>
        <div className='DataMaxMin'>
          <span className='DataMax'><strong>Max {this.props.label}</strong>: {dataMax} {this.props.units}</span>
          <span className='DataMin'><strong>Min {this.props.label}</strong>: {dataMin} {this.props.units}</span>
        </div>
      </Sparklines>
    )
  }
}

WeatherChart.propTypes = {
  color: React.PropTypes.string,
  data: React.PropTypes.array,
  lineType: React.PropTypes.string,
  isTemp: React.PropTypes.bool,
  label: React.PropTypes.string,
  units: React.PropTypes.string
}

export default WeatherChart
