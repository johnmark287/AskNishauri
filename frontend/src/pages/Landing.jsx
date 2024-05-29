import { useState } from "react";
import LandingSidebar from "../components/LandingSidebar";
import LandingNavbar from "../components/LandingNavbar";
import LandingMain from "../components/LandingMain";
import LandingFooter from "../components/LandingFooter";

function Landing() {
  const [open, setOpen] = useState(true);

  function handleOpen() {
    setOpen(!open);
  }
  return (
    <div className="text-black relative">
      <LandingSidebar open={open} setOpen={handleOpen} />
      <LandingNavbar setOpen={handleOpen} />
      <LandingMain open={open}/>
      <LandingFooter open={open}/>
    </div>
  );
}

export default Landing;
