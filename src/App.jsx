import { useState } from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import { SkeletonTheme } from "react-loading-skeleton";


function App() {
  const [open, setOpen] = useState(true);
  
  function handleOpen() {
    setOpen(!open);
  }
  return (
    <div className="flex">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <Sidebar open={open} setOpen={handleOpen} />
        <Main open={open} />
      </SkeletonTheme>
    </div>
  )
}

export default App
