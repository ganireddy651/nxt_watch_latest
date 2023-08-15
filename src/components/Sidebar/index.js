import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BiSolidHot} from 'react-icons/bi'
import {SiYoutubegaming} from 'react-icons/si'
import {BsFileEarmarkCheck} from 'react-icons/bs'
import {SidebarContainer} from './sidebar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Sidebar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value

      const NavItemColor = isDark ? 'light-sidebar-items' : 'dark-sidebar-items'

      const contactUs = isDark
        ? 'dark-contact-us-heading'
        : 'light-contact-us-heading'

      const sidebarDescription = isDark
        ? 'dark-sidebar-description'
        : 'light-sidebar-description'
      return (
        <SidebarContainer isDark={isDark} className="sidebar-container">
          <div className="sidebar-top-section">
            <Link to="/" className="link">
              <div className="home-tab-container">
                <AiFillHome className="sidebar-icons" />
                <p className={NavItemColor}>Home</p>
              </div>
            </Link>
            <Link to="/trending" className="link">
              <div className="home-tab-container">
                <BiSolidHot className="sidebar-icons" />
                <p className={NavItemColor}>Trending</p>
              </div>
            </Link>
            <Link to="/gaming" className="link">
              <div className="home-tab-container">
                <SiYoutubegaming className="sidebar-icons" />
                <p className={NavItemColor}>Gaming</p>
              </div>
            </Link>
            <Link to="/saved-videos" className="link">
              <div className="home-tab-container">
                <BsFileEarmarkCheck className="sidebar-icons" />
                <p className={NavItemColor}>Saved Video</p>
              </div>
            </Link>
          </div>
          <div className="contact-us-container">
            <h1 className={contactUs}>CONTACT US</h1>
            <div className="social-icons-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
                className="social-icons"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
                className="social-icons"
              />
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
                className="social-icons"
              />
            </div>
            <p className={sidebarDescription}>
              Enjoy! Now to see your channels and recommendations!
            </p>
          </div>
        </SidebarContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Sidebar
