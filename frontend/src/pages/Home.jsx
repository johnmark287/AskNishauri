// import { useState } from 'react'
// import Sidebar from '../components/Sidebar'
import Main from "../components/Main";
import { SkeletonTheme } from "react-loading-skeleton";

function Home() {
  // const [open, setOpen] = useState(true);

  // function handleOpen() {
  //     setOpen(!open);
  //   }
  return (
    <div className="flex">
      <SkeletonTheme baseColor="#fbe2ff" highlightColor="#B273F0">
        {/* <Sidebar open={open} setOpen={handleOpen} /> */}
        <Main />
      </SkeletonTheme>
    </div>
  );
}

export default Home;