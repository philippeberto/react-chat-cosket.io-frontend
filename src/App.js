import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import Rooms from './Rooms'
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <Router>

        <div className="App">
          <div className="App-header">
            <h4>Chat socket.io + React</h4>
          </div>
          <div>
            <Route path='/' exact component={Login} />
            <Route path='/rooms' exact component={Rooms} />
          </div>
        </div>
      </Router>

    )
  }
}

export default App
