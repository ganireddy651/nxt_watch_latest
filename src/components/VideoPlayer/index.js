import ReactPlayer from 'react-player'
import './index.css'

const VideoPlayer = props => {
  const {videoUrl, thumbnailUrl} = props
  return (
    <div className="video-container">
      <div className="responsive-container">
        <ReactPlayer
          width="100%"
          height="560px"
          light={
            <img
              src={thumbnailUrl}
              style={{width: '100%', height: '560px'}}
              alt="Thumbnail"
            />
          }
          url={videoUrl}
        />
      </div>
    </div>
  )
}

export default VideoPlayer
