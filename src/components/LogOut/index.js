import {useState} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import './index.css'

const LogOut = props => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const {isDark} = props

  const closePopup = () => {
    setIsPopupOpen(false)
  }
  const onModelOpen = () => {
    setIsPopupOpen(true)
  }

  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const logoutButton = isDark
    ? 'dark-theme-logout-button'
    : 'light-theme-logout-button'

  const modelBackground = isDark
    ? 'dark-logout-model-container'
    : 'light-logout-model-container'

  const modelContent = isDark && 'dark-theme-model-content'

  return (
    <div className="popup-container">
      <Popup
        trigger={
          <button className={logoutButton} type="button" onClick={onModelOpen}>
            Logout
          </button>
        }
        open={isPopupOpen}
        onClose={closePopup}
        modal="true"
      >
        <div className={modelBackground}>
          <p className={modelContent}>Are you sure you want to logout? </p>
          <div>
            <button
              type="button"
              className="model-cancel-button"
              onClick={closePopup}
            >
              Cancel
            </button>
            <button
              type="button"
              className="model-confirm-button"
              onClick={onLogout}
            >
              Confirm
            </button>
          </div>
        </div>
      </Popup>
    </div>
  )
}

export default withRouter(LogOut)
