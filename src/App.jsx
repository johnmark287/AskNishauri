import { useState } from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

function App() {
  const [open, setOpen] = useState(true);
  
  function handleOpen() {
    setOpen(!open);
  }
  return (
    <div className="flex">
        <Sidebar open={open} setOpen={handleOpen} />
        <Main open={open} />
    </div>
  )
}

export default App
