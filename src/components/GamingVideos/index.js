import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const GamingVideos = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value

      const {trendingVideos} = props
      const {
        id,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
        name,
      } = trendingVideos
      const postedTime = formatDistanceToNow(new Date(publishedAt))

      const trendingVideoHeading = isDark
        ? 'trending-dark-theme-title'
        : 'trending-light-theme-title'

      return (
        <li className="trending-video-item">
          <img
            className="trending-thumbnail"
            src={thumbnailUrl}
            alt="trending"
          />
          <div className="trending-video-details">
            <h1 className={trendingVideoHeading}>{title}</h1>
            <p className="trending-name">{name}</p>
            <p className="trending-view-count">
              {viewCount} . {postedTime}
            </p>
          </div>
        </li>
      )
    }}
  </ThemeContext.Consumer>
)
export default GamingVideos
