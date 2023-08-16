import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {BsFileEarmarkCheck, BsDot} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Header from '../Header'
import Failure from '../Failure'
import ThemeContext from '../../context/ThemeContext'
import VideoPlayer from '../VideoPlayer'
import Sidebar from '../Sidebar'
// import SavedVideoContext from '../../context/SavedVideoContext'
import {VideoContainer, VideoHeading, Paragraph} from './StyledComponents'
import './index.css'

const apiConstraints = {
  initial: 'INITIAL',
  in_progress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiConstraints.initial,
    videoDetails: {},
    onLike: false,
    onDislike: false,
    savedVideo: [],
  }

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
    } else {
      this.setState({apiStatus: apiConstraints.failure})
    }
  }

  onLike = () => {
    this.setState(prevState => ({
      onLike: !prevState.onLike,
      onDislike: false,
    }))
  }

  onDislike = () => {
    this.setState(prevState => ({
      onDislike: !prevState.onDislike,
      onLike: false,
    }))
  }

  onSaveVideo = () => {
    const {videoDetails} = this.state
    const {thumbnailUrl, title, name, viewCount, publishedAt} = videoDetails

    const newlySavedVideo = {
      thumbnailUrl,
      title,
      viewCount,
      name,
      publishedAt,
    }

    this.setState(prevState => ({
      onSave: !prevState.onSave,
      savedVideo: [...prevState.savedVideo, newlySavedVideo],
    }))
  }

  renderLoaderView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ff0000" height="50" width="50" />
    </div>
  )

  renderSuccessView = isDark => {
    const {videoDetails, onLike, onDislike, onSave} = this.state
    const {
      videoUrl,
      thumbnailUrl,
      description,
      publishedAt,
      viewCount,
      title,
      profileImageUrl,
      subscriberCount,
      name,
    } = videoDetails

    const postTime = formatDistanceToNow(new Date(publishedAt))

    const likeClassName = onLike && 'clicked'

    const disLikeClassName = onDislike && 'clicked'

    const savedClassName = onSave && 'clicked'

    const saveButtonText = onSave ? 'Saved' : 'Save'

    return (
      <div className="video-section-container">
        <VideoPlayer videoUrl={videoUrl} thumbnailUrl={thumbnailUrl} />
        <div className="video-info-container">
          <VideoHeading isDark={isDark}>{title}</VideoHeading>
          <div className="count-container">
            <div className="view-count-container">
              <p className="video-count-details">{viewCount} views</p>
              <BsDot className="span-text" />
              <p className="video-count-details">{postTime.slice(6, 15)} ago</p>
            </div>
            <div className="impressions-container">
              <button
                type="button"
                className={`like-dislike-save-button ${likeClassName}`}
                onClick={this.onLike}
              >
                <BiLike className="like-dislike-save" />
                <span className="like">Like</span>
              </button>
              <button
                type="button"
                className={`like-dislike-save-button ${disLikeClassName}`}
                onClick={this.onDislike}
              >
                <BiDislike className="like-dislike-save" />
                <span className="like">Dislike</span>
              </button>
              <button
                type="button"
                className={`like-dislike-save-button ${savedClassName}`}
                onClick={this.onSaveVideo}
              >
                <BsFileEarmarkCheck className="like-dislike-save" />
                <span className="like">{saveButtonText}</span>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="channel-info-container">
          <img
            src={profileImageUrl}
            alt="channel logo"
            className="channel-logo"
          />
          <div className="channel-details-container">
            <VideoHeading isDark={isDark}>{name}</VideoHeading>
            <p className="subscribers-count-details">
              {subscriberCount} Subscribers
            </p>
            <div className="comment-container">
              <Paragraph isDark={isDark}>{description}</Paragraph>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderFailureView = () => <Failure getVideo={this.getVideo} />

  renderVideo = isDark => {
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
    // const {savedVideo, onSave} = this.state
    return (
      <>
        <Header />
        <ThemeContext.Consumer>
          {value => {
            const {isDark} = value

            return (
              <div className="video-details-container">
                <Sidebar />
                <VideoContainer isDark={isDark}>
                  {this.renderVideo(isDark)}
                </VideoContainer>
              </div>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}

export default VideoItemDetails
