import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {
  LogInBackgroundContainer,
  FormContainer,
  Label,
  LogInInput,
  LogInLabel,
  Checkbox,
  LogInButton,
  ErrorParagraph,
} from './StyledComponents'
import './index.css'

const LogIn = props => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [showErrorMsg, setShowErrorMsg] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

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
    setIsClicked(prevState => !prevState)
  }

  const inputType = isClicked ? 'text' : 'password'

  const token = Cookies.get('jwt_token')
  if (token !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        const toggleBackground = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <LogInBackgroundContainer isDark={isDark}>
            <FormContainer onSubmit={onFormSubmit} isDark={isDark}>
              <div className="website-logo-container">
                <img
                  src={toggleBackground}
                  alt="website logo"
                  className="website-logo"
                />
              </div>
              <div className="username-container">
                <LogInLabel htmlFor="username" isDark={isDark}>
                  USERNAME
                </LogInLabel>
                <br />
                <LogInInput
                  type="text"
                  id="username"
                  placeholder="Username"
                  onChange={onChangeUsername}
                  value={username}
                />
              </div>
              <div className="password-container">
                <LogInLabel htmlFor="password" isDark={isDark}>
                  PASSWORD
                </LogInLabel>
                <br />
                <LogInInput
                  type={inputType}
                  id="password"
                  placeholder="Password"
                  className="login-password-input"
                  onChange={onChangePassword}
                  value={password}
                />
              </div>
              <div className="show-password-container">
                <Checkbox
                  type="checkbox"
                  id="checkbox"
                  onClick={onClickShowPassword}
                />
                <Label htmlFor="checkbox" isDark={isDark}>
                  Show password
                </Label>
              </div>
              <LogInButton type="submit" className="log-in-button">
                Login
              </LogInButton>
              {showErrorMsg && <ErrorParagraph>*{errorMsg}</ErrorParagraph>}
            </FormContainer>
          </LogInBackgroundContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default LogIn
