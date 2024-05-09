import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="flex">
        <Sidebar />
        <Main open={open} />
    </div>
  )
}

export default App
