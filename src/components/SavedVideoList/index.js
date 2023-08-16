import {formatDistanceToNow} from 'date-fns'
import {BiSolidHot} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const SavedVideoList = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value

      const {eachItem} = props
      const {thumbnailUrl, publishedAt, viewCount, title, name, id} = eachItem

      const postedTime = formatDistanceToNow(new Date(publishedAt))

      const trendingVideoHeading = isDark
        ? 'trending-dark-theme-title'
        : 'trending-light-theme-title'

      return (
        <li className="saved-container-item">
          <img
            className="trending-thumbnail"
            src={thumbnailUrl}
            alt="saved video"
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
export default SavedVideoList
