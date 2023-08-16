import Header from '../Header'
import Sidebar from '../Sidebar'
// import SavedVideoContext from '../../context/SavedVideoContext'
import ThemeContext from '../../context/ThemeContext'
import {SavedVideosSection, NoVideosHeading} from './StyledComponents'
import './index.css'

const SavedVideos = props => {
  const {eachItem} = props
  console.log(eachItem)

  return (
    <>
      <Header />
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <div className="app-home">
              <Sidebar />
              <SavedVideosSection isDark={isDark}>
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
              </SavedVideosSection>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    </>
  )
}
export default SavedVideos
