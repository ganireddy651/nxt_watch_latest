import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const GamingVideos = props => {
  const {eachGamingVideo} = props
  const {id, thumbnailUrl, title, viewCount} = eachGamingVideo

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        const headingGaming = isDark
          ? 'gaming-dark-theme-title'
          : 'gaming-light-theme-title'

        return (
          <li className="gaming-list">
            <Link to={`/videos/${id}`}>
              <img
                src={thumbnailUrl}
                alt="gaming thumbnail"
                className="gaming-thumbnail"
              />
            </Link>
            <h1 className={headingGaming}>{title}</h1>
            <p className="gaming-count">{viewCount} Watching Worldwide</p>
          </li>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideos
