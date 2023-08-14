import {useState} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import './index.css'

const LogOut = props => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  const onLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="popup-container">
      <Popup
        trigger={
          <button
            className="logout-button"
            type="button"
            onClick={() => setIsPopupOpen(true)}
          >
            Logout
          </button>
        }
        open={isPopupOpen}
        onClose={closePopup}
        modal="true"
      >
        <div className="logout-model-container">
          <p>Are you sure you want to logout? </p>
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
