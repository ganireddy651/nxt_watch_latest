import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogIn = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [showErrorMsg, setShowErrorMsg] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const {isDark} = props

  const renderSuccessView = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  const renderFailureView = errorMessage => {
    setErrorMsg(errorMessage)
  }

  const onFormSubmit = async e => {
    e.preventDefault()

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      renderSuccessView(data.jwt_token)
    } else {
      renderFailureView(data.error_msg)
      setShowErrorMsg(true)
    }
  }

  const onChangePassword = e => {
    setPassword(e.target.value)
  }

  const onChangeUsername = e => {
    setUsername(e.target.value)
  }

  const onClickShowPassword = () => {
    setIsClicked(prevState => !prevState.isClicked)
  }

  const inputType = isClicked ? 'text' : 'password'

  const toggleBackground = isDark
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

  const token = Cookies.get('jwt_token')
  if (token !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="Log-in-container">
      <form onSubmit={onFormSubmit} className="login-form-container">
        <div className="website-logo-container">
          <img
            src={toggleBackground}
            alt="website logo"
            className="website-logo"
          />
        </div>
        <div className="username-container">
          <label htmlFor="username" className="username-label">
            USERNAME
          </label>
          <br />
          <input
            type="text"
            id="username"
            className="login-username-input"
            placeholder="Username"
            onChange={onChangeUsername}
            value={username}
          />
        </div>
        <div className="password-container">
          <label htmlFor="password" className="password-label">
            PASSWORD
          </label>
          <br />
          <input
            type={inputType}
            id="password"
            placeholder="Password"
            className="login-password-input"
            onChange={onChangePassword}
            value={password}
          />
        </div>
        <div className="show-password-container">
          <input
            type="checkbox"
            id="checkbox"
            className="login-checkbox"
            onClick={onClickShowPassword}
          />
          <label htmlFor="checkbox" className="show-password-label">
            Show password
          </label>
        </div>
        <button type="submit" className="log-in-button">
          Login
        </button>
        {showErrorMsg && <p className="login-error-message">*{errorMsg}</p>}
      </form>
    </div>
  )
}

export default LogIn
