import {BiSolidHot} from 'react-icons/bi'
import Header from '../Header'
import Sidebar from '../Sidebar'
import ThemeContext from '../../context/ThemeContext'
import SavedVideoList from '../SavedVideoList'
import {
  SavedVideosSection,
  NoVideosHeading,
  TrendingBackground,
  TrendingContainer,
  TrendingHeading,
} from './StyledComponents'
import './index.css'

const SavedVideos = () => (
  <>
    <Header />
    <ThemeContext.Consumer>
      {value => {
        const {isDark, savedVideo, onSave} = value

        return (
          <div className="app-home">
            <Sidebar />
            <SavedVideosSection isDark={isDark}>
              {savedVideo.length === 0 ? (
                <div className="no-saved-videos-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                    alt="no saved videos"
                    className="no-saved-videos"
                  />
                  <NoVideosHeading isDark={isDark}>
                    No saved videos found
                  </NoVideosHeading>
                  <p className="no-saved-description">
                    You can save your videos while watching them
                  </p>
                </div>
              ) : (
                <>
                  <TrendingBackground isDark={isDark}>
                    <TrendingContainer isDark={isDark}>
                      <BiSolidHot className="trending-icon" />
                    </TrendingContainer>
                    <TrendingHeading isDark={isDark}>
                      Saved Videos
                    </TrendingHeading>
                  </TrendingBackground>
                  <ul className="saved-list-container">
                    {savedVideo.map(eachItem => (
                      <SavedVideoList eachItem={eachItem} key={eachItem.id} />
                    ))}
                  </ul>
                </>
              )}
              <p>{}</p>
            </SavedVideosSection>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)
export default SavedVideos
