import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import Failure from '../Failure'
import VideoPlayer from '../VideoPlayer'
import Sidebar from '../Sidebar'
import './index.css'

const apiConstraints = {
  initial: 'INITIAL',
  in_progress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {apiStatus: apiConstraints.initial, videoDetails: {}}

  componentDidMount() {
    this.getVideo()
  }

  getVideo = async () => {
    this.setState({apiStatus: apiConstraints.in_progress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = {
        id: data.video_details.id,
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        title: data.video_details.title,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        name: data.video_details.channel.name,
      }
      this.setState({
        apiStatus: apiConstraints.success,
        videoDetails: updatedData,
      })
      console.log(updatedData)
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
    const {videoDetails} = this.state
    const {videoUrl, thumbnailUrl} = videoDetails

    return (
      <div className="video-section-container">
        <VideoPlayer videoUrl={videoUrl} thumbnailUrl={thumbnailUrl} />
      </div>
    )
  }

  renderFailureView = () => <Failure getVideo={this.getVideo} />

  renderVideo = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiConstraints.in_progress:
        return this.renderLoaderView()
      case apiConstraints.success:
        return this.renderSuccessView()
      case apiConstraints.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="video-details-container">
          <Sidebar />
          <div className="video-item">{this.renderVideo()}</div>
        </div>
      </>
    )
  }
}

export default VideoItemDetails
