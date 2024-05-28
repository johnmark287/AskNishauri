import { useState } from "react";
import LandingMain from "../components/LandingMain";
import LandingNavbar from "../components/LandingNavbar";

function Landing() {
  const [open, setOpen] = useState(true);

  function handleOpen() {
    setOpen(!open);
  }
  return (
    <div className="text-black relative">
      <LandingNavbar open={open} setOpen={handleOpen} />
      <LandingMain />
    </div>
  );
}

export default Landing;
