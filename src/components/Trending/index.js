import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BiSolidHot} from 'react-icons/bi'
import Cookies from 'js-cookie'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'
import Sidebar from '../Sidebar'
import Failure from '../Failure'
import TrendingVideos from '../TrendingVideos'
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

class Trending extends Component {
  state = {apiStatus: apiConstraints.initial, trendingVideosArray: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiConstraints.in_progress})
    const token = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.videos.map(eachTrendingVideoDetails => ({
        id: eachTrendingVideoDetails.id,
        publishedAt: eachTrendingVideoDetails.published_at,
        thumbnailUrl: eachTrendingVideoDetails.thumbnail_url,
        title: eachTrendingVideoDetails.title,
        viewCount: eachTrendingVideoDetails.view_count,
        name: eachTrendingVideoDetails.channel.name,
        profileImageUrl: eachTrendingVideoDetails.channel.profile_image_url,
      }))

      this.setState({
        apiStatus: apiConstraints.success,
        trendingVideosArray: updatedData,
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
    const {trendingVideosArray} = this.state
    return (
      <ul className="trending-list-container">
        {trendingVideosArray.map(trendingVideos => (
          <TrendingVideos
            trendingVideos={trendingVideos}
            key={trendingVideos.id}
          />
        ))}
      </ul>
    )
  }

  renderFailureView = () => (
    <Failure getTrendingVideos={this.getTrendingVideos} />
  )

  renderTrendingVideos = isDark => {
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

          const trendingVideosContainer = isDark
            ? 'trending-dark-videos-container'
            : 'trending-light-videos-container'

          return (
            <>
              <Header />
              <div className="app-home">
                <Sidebar />
                <TrendingVideosSection isDark={isDark}>
                  <TrendingBackground isDark={isDark}>
                    <TrendingContainer isDark={isDark}>
                      <BiSolidHot className="trending-icon" />
                    </TrendingContainer>
                    <TrendingHeading isDark={isDark}>Trending</TrendingHeading>
                  </TrendingBackground>
                  {this.renderTrendingVideos()}
                </TrendingVideosSection>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
