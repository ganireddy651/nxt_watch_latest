import ReactPlayer from 'react-player'
import './index.css'

const VideoPlayer = props => {
  const {videoUrl} = props
  return (
    <div className="video-container">
      <div className="responsive-container">
        <ReactPlayer width="100%" height="560px" url={videoUrl} />
      </div>
    </div>
  )
}

export default VideoPlayer
