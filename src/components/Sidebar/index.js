import {AiFillHome} from 'react-icons/ai'
import {BiSolidHot} from 'react-icons/bi'
import {SiYoutubegaming} from 'react-icons/si'
import {BsFileEarmarkCheck} from 'react-icons/bs'
import './index.css'

const Sidebar = () => (
  <div className="sidebar-container">
    <div className="home-tab-container">
      <AiFillHome />
      <p className="sidebar-items">Home</p>
    </div>
    <div className="home-tab-container">
      <BiSolidHot />
      <p className="sidebar-items">Trending</p>
    </div>
    <div className="home-tab-container">
      <SiYoutubegaming />
      <p className="sidebar-items">Gaming</p>
    </div>
    <div className="home-tab-container">
      <BsFileEarmarkCheck />
      <p className="sidebar-items">Saved Video</p>
    </div>
    <div className="contact-us-container">
      <h1>CONTACT US</h1>
      <div className="social-icons-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          alt="facebook logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          alt="twitter logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          alt="linked in logo"
        />
      </div>
      <p>Enjoy! Now to see your channels and recommendations!</p>
    </div>
  </div>
)

export default Sidebar
