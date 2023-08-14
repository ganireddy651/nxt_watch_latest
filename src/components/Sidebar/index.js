import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BiSolidHot} from 'react-icons/bi'
import {SiYoutubegaming} from 'react-icons/si'
import {BsFileEarmarkCheck} from 'react-icons/bs'
import './index.css'

const Sidebar = () => (
  <div className="sidebar-container">
    <div className="sidebar-top-section">
      <Link to="/" className="link">
        <div className="home-tab-container">
          <AiFillHome />
          <p className="sidebar-items">Home</p>
        </div>
      </Link>
      <Link to="/trending" className="link">
        <div className="home-tab-container">
          <BiSolidHot />
          <p className="sidebar-items">Trending</p>
        </div>
      </Link>
      <Link to="/gaming" className="link">
        <div className="home-tab-container">
          <SiYoutubegaming />
          <p className="sidebar-items">Gaming</p>
        </div>
      </Link>
      <Link to="/saved-videos" className="link">
        <div className="home-tab-container">
          <BsFileEarmarkCheck />
          <p className="sidebar-items">Saved Video</p>
        </div>
      </Link>
    </div>
    <div className="contact-us-container">
      <h1 className="contact-us-heading">CONTACT US</h1>
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
      <p className="sidebar-description">
        Enjoy! Now to see your channels and recommendations!
      </p>
    </div>
  </div>
)

export default Sidebar
