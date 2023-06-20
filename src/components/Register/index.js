import {Component} from 'react'
import RegisterContext from '../../context/RegisterContext'
import Button from '../StyledComponent'
import Header from '../Header'
import TopicList from '../TopicList'
import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {name: '', errorMessage: '', selectValue: topicsList[0].id}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  selectOptionChange = e => {
    this.setState({selectValue: e.target.value})
  }

  renderData = () => (
    <RegisterContext.Consumer>
      {value => {
        const {name, errorMessage, selectValue} = this.state
        const {getName, getDisplayText, changeRegistrationStatus} = value

        const onFormSubmit = event => {
          event.preventDefault()

          const {history} = this.props
          if (name === '') {
            history.replace('/register')
            this.setState({errorMessage: 'Please enter your name'})
          } else {
            getName(name)
            getDisplayText(selectValue)
            changeRegistrationStatus()
            history.replace('/')
          }
        }
        return (
          <div className="register-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png "
              alt="website register"
            />
            <form onSubmit={onFormSubmit}>
              <h1 className="form-heading">Let us join</h1>
              <div className="input-container">
                <label className="label" htmlFor="name">
                  NAME
                </label>
                <br />
                <input
                  id="name"
                  onChange={this.onChangeName}
                  value={name}
                  className="input"
                  type="text"
                />
              </div>
              <div className="input-container">
                <label className="label" htmlFor="topic">
                  TOPICS
                </label>
                <br />
                <select
                  className="option"
                  value={selectValue}
                  id="topic"
                  onChange={this.selectOptionChange}
                >
                  {topicsList.map(eachTopic => (
                    <TopicList eachTopic={eachTopic} key={eachTopic.id} />
                  ))}
                </select>
              </div>
              <Button type="submit">Register Now</Button>
              {name === '' && <p>{errorMessage}</p>}
            </form>
          </div>
        )
      }}
    </RegisterContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        {this.renderData()}
      </>
    )
  }
}

export default Register
