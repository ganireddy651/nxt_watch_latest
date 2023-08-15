import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import Sidebar from '../Sidebar'
import Header from '../Header'
import Failure from '../Failure'
import VideosList from '../VideosList'
import {HomeBackGroundContainer} from './StyledComponents'
import './index.css'

const apiConstraints = {
  initial: 'INITIAL',
  in_progress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {userSearch: '', apiStatus: apiConstraints.initial, videosArray: []}

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({apiStatus: apiConstraints.in_progress})
    const token = Cookies.get('jwt_token')
    const allUrl = `https://apis.ccbp.in/videos/all`
    console.log(allUrl)
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(allUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.videos.map(eachVideoDetails => ({
        id: eachVideoDetails.id,
        publishedAt: eachVideoDetails.published_at,
        thumbnailUrl: eachVideoDetails.thumbnail_url,
        title: eachVideoDetails.title,
        viewCount: eachVideoDetails.view_count,
        name: eachVideoDetails.channel.name,
        profileImageUrl: eachVideoDetails.channel.profile_image_url,
      }))
      this.setState({
        apiStatus: apiConstraints.success,
        videosArray: updatedData,
      })
    } else {
      this.setState({apiStatus: apiConstraints.failure})
    }
  }

  onRetry = () => {
    this.getVideosData()
  }

  onSearch = async () => {
    const {userSearch} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${userSearch}`
    console.log(url)
    this.setState({apiStatus: apiConstraints.in_progress})
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedData = data.videos.map(eachVideoDetails => ({
        id: eachVideoDetails.id,
        publishedAt: eachVideoDetails.published_at,
        thumbnailUrl: eachVideoDetails.thumbnail_url,
        title: eachVideoDetails.title,
        viewCount: eachVideoDetails.view_count,
        name: eachVideoDetails.channel.name,
        profileImageUrl: eachVideoDetails.channel.profile_image_url,
      }))
      this.setState({
        apiStatus: apiConstraints.success,
        videosArray: updatedData,
      })
    } else {
      this.setState({apiStatus: apiConstraints.failure})
    }
  }

  onChangeSearch = e => {
    this.setState({userSearch: e.target.value})
  }

  renderLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ff0000" height="50" width="50" />
    </div>
  )

  renderSuccessView = isDark => {
    const {videosArray} = this.state

    const noSearchClassName = isDark && 'no-search-results'

    return (
      <>
        {videosArray.length === 0 ? (
          <div className="no-search-results-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
              alt="no videos"
              className="no-videos-image"
            />
            <h1 className={noSearchClassName}>No Search results found</h1>
            <p className={noSearchClassName}>
              Try different key words or remove search filter
            </p>
            <button type="button" className="retry" onClick={this.onRetry}>
              Retry
            </button>
          </div>
        ) : (
          <ul className="videos-list-container">
            {videosArray.map(videos => (
              <VideosList videos={videos} key={videos.id} />
            ))}
          </ul>
        )}
      </>
    )
  }

  renderFailureView = () => <Failure getVideosData={this.getVideosData} />

  renderHomePageVideos = isDark => {
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
                <HomeBackGroundContainer
                  isDark={isDark}
                  className="home-container"
                >
                  <div className="banner-container">
                    <div>
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="website logo"
                        className="website-logo"
                      />
                      <h1 className="banner-heading">
                        But Nxt Watch Premium prepaid plans with UPI
                      </h1>
                      <button type="button" className="banner-button">
                        GET IT NOW
                      </button>
                    </div>
                  </div>
                  <div className="search-container">
                    <input
                      type="search"
                      placeholder="Search"
                      className="search-input"
                      onChange={this.onChangeSearch}
                    />
                    <button
                      type="button"
                      className="search-button"
                      onClick={this.onSearch}
                    >
                      <AiOutlineSearch className="search-icon" />
                    </button>
                  </div>
                  {this.renderHomePageVideos(isDark)}
                </HomeBackGroundContainer>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
