import React from 'react'
import GetStarted from './components/get-started'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <>
        <GetStarted />
        {this.props.children}
      </>
    )
  }
}

export default App