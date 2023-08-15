import Header from '../Header'
import Sidebar from '../Sidebar'
import './index.css'

const SavedVideos = () => (
  <>
    <Header />
    <div className="app-home">
      <Sidebar />
      <h1>Saved</h1>
    </div>
  </>
)

export default SavedVideos
