import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import LogIn from './components/LogIn'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {isDark: false, onSave: false, savedVideo: []}

  changeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  onSaveVideo = vedioDetails => {
    const {onSave, savedVideo} = this.state
    if (onSave === false) {
      this.setState(prevState => ({
        onSave: !prevState.onSave,
        savedVideo: [...prevState.savedVideo, vedioDetails],
      }))
    } else {
      const filteredData = savedVideo.filter(
        each => each.id !== vedioDetails.id,
      )
      this.setState(prevState => ({
        onSave: !prevState.onSave,
        savedVideo: filteredData,
      }))
    }
  }

  render() {
    const {isDark, onSave, savedVideo} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          changeTheme: this.changeTheme,
          onSave,
          onSaveVideo: this.onSaveVideo,
          savedVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LogIn} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
