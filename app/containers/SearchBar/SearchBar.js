import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../../actions/FETCH_WEATHER'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { term: '' }
  }

  onInputChange (event) {
    this.setState({ term: event.target.value })
  }

  onFormSubmit (event) {
    event.preventDefault()
    this.props.fetchWeather(this.state.term)
    this.setState({term: ''})
  }

  render () {
    return (
      <form
        className='input-group'
        onSubmit={::this.onFormSubmit}
      >
        <input
          placeholder='Get a five-day forcast in your favorite cities.'
          className='form-control'
          value={this.state.term}
          onChange={::this.onInputChange}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}

SearchBar.propTypes = {
  term: React.PropTypes.string,
  fetchWeather: React.PropTypes.func
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
