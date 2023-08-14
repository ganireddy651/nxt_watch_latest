import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <>
          <Header />
          <h1>NotFound</h1>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
