import React from 'react'
import './App.styl'

class App extends React.Component {
  render () {
    const { children } = this.props
    return (
      <div className='AppContainer'>
        <main>
          <h1 className='MainTitle'>
            React simple starter
          </h1>
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
