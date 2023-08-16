import {Component} from 'react'
import {Link} from 'react-router-dom'
import {MdDarkMode, MdOutlineLightMode} from 'react-icons/md'
import ThemeContext from '../../context/ThemeContext'
import LogOut from '../LogOut'
import './index.css'

class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, changeTheme} = value
          const toggleWebsiteLogo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const navbarBackground = isDark ? 'dark-bg-navbar' : 'light-bg-navbar'

          const darkAndLightTheme = isDark
            ? 'dark-theme-icon'
            : 'light-theme-icon'

          const onThemeChange = () => {
            changeTheme()
          }

          return (
            <nav className={navbarBackground}>
              <Link to="/">
                <img
                  src={toggleWebsiteLogo}
                  alt="website logo"
                  className="website-logo"
                />
              </Link>
              <div className="nav-items">
                <button
                  type="button"
                  className="theme-button"
                  onClick={onThemeChange}
                >
                  {isDark ? (
                    <MdOutlineLightMode className={darkAndLightTheme} />
                  ) : (
                    <MdDarkMode className={darkAndLightTheme} />
                  )}
                </button>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                  className="logout-profile-image"
                />
                <LogOut isDark={isDark} />
              </div>
            </nav>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Header
