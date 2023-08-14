import {MdDarkMode} from 'react-icons/md'
import LogOut from '../LogOut'
import './index.css'

const Header = props => {
  const {isDark} = props

  const toggleWebsiteLogo = isDark
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

  const navbarBackground = isDark ? 'dark-bg-navbar' : 'light-bg-navbar'

  return (
    <nav className={navbarBackground}>
      <img
        src={toggleWebsiteLogo}
        alt="website logo"
        className="website-logo"
      />
      <div className="nav-items">
        <button type="button" className="theme-button">
          <MdDarkMode className="theme-icon" />
        </button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
          className="logout-profile-image"
        />
        <LogOut />
      </div>
    </nav>
  )
}
export default Header
