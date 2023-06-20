import {Component} from 'react'
import {Route} from 'react-router-dom'

import RegisterContext from './context/RegisterContext'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {isRegister: false, displayText: '', name: ''}

  changeRegistrationStatus = () => {
    this.setState(preState => ({
      isRegister: !preState.isRegister,
    }))
  }

  getName = name => {
    this.setState({name})
  }

  getDisplayText = text => {
    this.setState({displayText: text})
  }

  render() {
    const {isRegister, displayText, name} = this.state
    return (
      <RegisterContext.Provider
        value={{
          isRegister,
          displayText,
          name,
          getName: this.getName,
          getDisplayText: this.getDisplayText,
          changeRegistrationStatus: this.changeRegistrationStatus,
        }}
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </RegisterContext.Provider>
    )
  }
}

export default App
