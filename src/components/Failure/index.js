import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Failure = props => {
  const {getVideosData} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value

        const failureImage = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        const onRetry = () => {
          getVideosData()
        }

        return (
          <div className="failure-container">
            <img
              src={failureImage}
              alt="failure logo"
              className="failure-image"
            />
            <h1 className="failure-heading">Oops! Something Went Wrong</h1>
            <p className="failure-description">
              We are having some trouble to complete your request. please try
              again.
            </p>
            <button type="button" className="retry" onClick={onRetry}>
              Retry
            </button>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  )
}
export default Failure