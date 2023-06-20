import {Component} from 'react'
import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'

import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {isRegister, displayText, name} = value
          return (
            <>
              {isRegister ? (
                <>
                  <Header />
                  <div className="home-route-container">
                    <h1 className="main-heading">Hello {name}</h1>
                    <p className="home-para">Welcome to {displayText}</p>

                    <img
                      className="image"
                      src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                      alt="meetup"
                    />
                  </div>
                </>
              ) : (
                <>
                  <Header />
                  <div className="home-route-container">
                    <h1 className="main-heading">Welcome to Meetup</h1>
                    <p className="home-para">Please register for the topic</p>
                    <div className="button-container">
                      <Link to="/register">
                        <button className="button-register" type="button">
                          Register
                        </button>
                      </Link>
                    </div>
                    <img
                      className="image"
                      src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                      alt="meetup"
                    />
                  </div>
                </>
              )}
            </>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}
export default Home
