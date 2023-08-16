import Header from '../Header'
import Sidebar from '../Sidebar'
import SavedVideoContext from '../../context/SavedVideoContext'
import './index.css'

const SavedVideos = props => {
  const {eachItem} = props
  console.log(eachItem)

  return (
    <>
      <Header />
      <SavedVideoContext.Consumer>
        <div className="app-home">
          <Sidebar />
          <h1>Saved</h1>
        </div>
      </SavedVideoContext.Consumer>
    </>
  )
}
export default SavedVideos
