import './App.css'
import SubmitModal from './components/submit/submit'
import ShowModal from './components/show/show'
import Languagues from './components/Languages/lenguagues'
import Hyperspeed from './components/hyperspeed/hyperspeed'

function App() {
  return (
    <>
      <div className="background">
        <Hyperspeed />
      </div>

      <div className="translate-container">
        <Languagues target="submit">
          <SubmitModal />
        </Languagues>
      </div>

      <div className="translate-container">
        <Languagues target="show">
          <ShowModal />
        </Languagues>
      </div>
    </>
  )
}

export default App