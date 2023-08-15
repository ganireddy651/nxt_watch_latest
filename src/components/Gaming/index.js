import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import Sidebar from '../Sidebar'
import Failure from '../Failure'
import GamingVideos from '../GamingVideos'
import {
  TrendingBackground,
  TrendingContainer,
  TrendingHeading,
  TrendingVideosSection,
} from './StyledComponents'
import './index.css'

const apiConstraints = {
  initial: 'INITIAL',
  in_progress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {apiStatus: apiConstraints.initial, gamingVideosArray: []}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiConstraints.in_progress})
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.videos.map(eachGamingvideo => ({
        id: eachGamingvideo.id,
        thumbnailUrl: eachGamingvideo.thumbnail_url,
        viewCount: eachGamingvideo.view_count,
        title: eachGamingvideo.title,
      }))

      this.setState({
        apiStatus: apiConstraints.success,
        gamingVideosArray: updatedData,
      })
    } else {
      this.setState({apiStatus: apiConstraints.failure})
    }
  }

  renderLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ff0000" height="50" width="50" />
    </div>
  )

  renderSuccessView = () => {
    const {gamingVideosArray} = this.state

    return (
      <ul className="gaming-list-container">
        {gamingVideosArray.map(eachGamingVideo => (
          <GamingVideos
            eachGamingVideo={eachGamingVideo}
            key={eachGamingVideo.id}
          />
        ))}
      </ul>
    )
  }

  renderFailureView = () => <Failure getGamingVideos={this.getGamingVideos} />

  renderGamingVideos = isDark => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstraints.in_progress:
        return this.renderLoaderView()
      case apiConstraints.success:
        return this.renderSuccessView(isDark)
      case apiConstraints.failure:
        return this.renderFailureView(isDark)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <>
              <Header />
              <div className="app-home">
                <Sidebar />
                <TrendingVideosSection isDark={isDark}>
                  <TrendingBackground isDark={isDark}>
                    <TrendingContainer isDark={isDark}>
                      <SiYoutubegaming className="trending-icon" />
                    </TrendingContainer>
                    <TrendingHeading isDark={isDark}>Gaming</TrendingHeading>
                  </TrendingBackground>
                  {this.renderGamingVideos()}
                </TrendingVideosSection>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
