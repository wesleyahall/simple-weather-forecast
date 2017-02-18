import React from 'react'
import SearchBar from '../SearchBar'

import '../../assets/lib/bootstrap.min.css'
import './App.styl'

class App extends React.Component {
  render () {
    const { children } = this.props
    return (
      <div className='AppContainer'>
        <main>
          <h1 className='MainTitle'>
            Simple Weather Forecast
          </h1>
          <SearchBar />
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
