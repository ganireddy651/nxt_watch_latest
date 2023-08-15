import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const VideosList = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const {videos} = props
      const {
        id,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
        name,
        profileImageUrl,
      } = videos

      const postedOn = formatDistanceToNow(new Date(publishedAt))

      const videoTitle = isDark ? 'dark-theme-title' : 'light-theme-title'

      return (
        <li className="video-card">
          <Link to={`/videos/${id}`}>
            <img
              src={thumbnailUrl}
              alt="video thumbnail"
              className="video-thumbnail-image"
            />
          </Link>
          <div className="video-details-container">
            <img
              src={profileImageUrl}
              alt="channel logo"
              className="channel-logo"
            />
            <div className="video-details">
              <h1 className={videoTitle}>{title}</h1>
              <p className="name">{name}</p>
              <p className="view-count">
                {viewCount} views . {postedOn} ago
              </p>
            </div>
          </div>
        </li>
      )
    }}
  </ThemeContext.Consumer>
)

export default VideosList
