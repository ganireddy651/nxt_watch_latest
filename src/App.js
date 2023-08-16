import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import LogIn from './components/LogIn'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import SavedVideoContext from './context/SavedVideoContext'
import ProtectedRoute from './components/ProtectedRoute'

import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {isDark: false, onSave: false}

  changeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  onSaveVideo = () => {
    this.setState(prevState => ({
      onSave: !prevState.onSave,
    }))
  }

  render() {
    const {isDark, onSave} = this.state

    return (
      <SavedVideoContext.Provider
        value={{onSave, onSaveVideo: this.onSaveVideo}}
      >
        <ThemeContext.Provider value={{isDark, changeTheme: this.changeTheme}}>
          <Switch>
            <Route exact path="/login" component={LogIn} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Route component={NotFound} />
          </Switch>
        </ThemeContext.Provider>
      </SavedVideoContext.Provider>
    )
  }
}

export default App
