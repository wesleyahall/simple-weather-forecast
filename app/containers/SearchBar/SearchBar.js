import React from 'react'

class SearchBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { term: '' }
  }

  onInputChange (event) {
    console.log(event.target.value)
    this.setState({ term: event.target.value })
  }

  onFormSubmit (event) {
    event.preventDefault()
    // fetch weather data
  }

  render () {
    return (
      <form onSubmit={::this.onFormSubmit} className='input-group'>
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
  term: React.PropTypes.string
}

export default SearchBar
