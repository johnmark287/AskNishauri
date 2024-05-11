import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main';

function Home() {
    const [open, setOpen] = useState(true);

    function handleOpen() {
        setOpen(!open);
      }
        return (
    <div className='flex'>
       <Sidebar open={open} setOpen={handleOpen} />
       <Main open={open} />
    </div>
  )
}

export default Home
