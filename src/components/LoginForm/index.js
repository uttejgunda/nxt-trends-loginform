// Write your JS code here
import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmitMsg: false, errorMsg: ''}

  usernameEntry = event => {
    this.setState({username: event.target.value})
  }

  passwordEntry = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitMsg: true, errorMsg})
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userdetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userdetails),
    }

    const response = await fetch(url, options)

    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showSubmitMsg, errorMsg} = this.state

    return (
      <div className="responsive-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="login"
            className="login-image"
          />
        </div>
        <div className="rightside-container">
          <div className="login-form-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="logo"
              className="login-logo"
            />
            <form className="form" onSubmit={this.onFormSubmit}>
              <label className="label" htmlFor="username">
                USERNAME
              </label>
              <input
                className="input-container"
                placeholder="Username"
                onChange={this.usernameEntry}
                value={username}
                type="text"
              />
              <label className="label" htmlFor="password">
                PASSWORD
              </label>
              <input
                className="input-container"
                placeholder="Password"
                onChange={this.passwordEntry}
                value={password}
                type="password"
              />
              <button className="button" type="submit">
                Login
              </button>
              {showSubmitMsg && <p className="error-msg">{errorMsg}</p>}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
