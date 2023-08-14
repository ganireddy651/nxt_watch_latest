import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import Sidebar from '../Sidebar'
import Header from '../Header'
import './index.css'

class Home extends Component {
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
                <div className="home-container">
                  <h1>Ganesh</h1>
                </div>
              </div>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
