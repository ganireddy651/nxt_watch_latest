import ThemeContext from '../../context/ThemeContext'
import Sidebar from '../Sidebar'
import {NotFoundContainer} from './notfound'
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value

      const notFoundImage = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const className = isDark && 'not-found-styles'
      return (
        <>
          <Header />
          <div className="app-home">
            <Sidebar />
            <div className="home-container">
              <NotFoundContainer isDark={isDark}>
                <img
                  src={notFoundImage}
                  alt="not found"
                  className="not-found-image"
                />
                <h1 className={className}>Page Not Found</h1>
                <p className={className}>
                  We are sorry, the page you requested could not be found.
                </p>
              </NotFoundContainer>
            </div>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
